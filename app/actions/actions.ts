"use server";

import prisma from "@/lib/db";
import { requireUser } from "@/lib/hooks";
import { parseWithZod } from "@conform-to/zod";
import { onboardingSchema, onboardingSchemaValidation } from "@/lib/zodSchemas";

export async function OnboardingAction(prevState: any, formData: FormData) {
  const session = await requireUser();

  const submission = parseWithZod(formData, {
    schema: onboardingSchemaValidation({
      async isUsernameUnique() {
        const existingUsername = await prisma.user.findUnique({
          where: {
            username: formData.get("userName") as string,
          },
        });

        return !existingUsername;
      },
    }),

    async: true,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const data = await prisma.user.update({
    where: {
      id: session.user?.id,
    },
    data: {
      username: submission.value.userName,
      name: submission.value.fullName,
    },
  });
}
