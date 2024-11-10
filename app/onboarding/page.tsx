"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormState } from "react-dom";
import { OnboardingAction } from "../actions/actions";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { onboardingSchema } from "@/app/lib/zodSchemas";
import { useState } from "react";
import { SubmitButton } from "../components/SubmitButtons";

const OnboardingPage = () => {
  const [lastResult, action] = useFormState(OnboardingAction, undefined);
  const [disableSpace, setDisableSpace] = useState("");
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, {
        schema: onboardingSchema,
      });
    },

    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });
  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <Card>
        <CardHeader className="flex flex-col gap-1">
          <CardTitle>
            Welcome to Loukas <span className="text-primary">Calendar</span>
          </CardTitle>
          <CardDescription className="text-base">
            We need the following information to set up your porfile
          </CardDescription>
        </CardHeader>

        <form id={form.id} onSubmit={form.onSubmit} action={action} noValidate>
          <CardContent className="flex flex-col gap-y-5">
            <div className="grid gap-y-2">
              <Label>Full Name</Label>
              <Input
                placeholder="Jhon Doe"
                defaultValue={fields.fullName.initialValue}
                key={fields.fullName.key}
                name={fields.fullName.name}
              />
              <p className="text-sm text-red-500">{fields.fullName.errors}</p>
            </div>
            <div className="grid gap-y-2">
              <Label>Username</Label>
              <div className="flex rounded-md">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-muted bg-muted text-sm text-muted-foreground">
                  loukasdev.com/
                </span>
                <Input
                  placeholder="example-username"
                  className="rounded-l-none"
                  defaultValue={fields.userName.initialValue}
                  key={fields.userName.key}
                  name={fields.userName.name}
                  value={disableSpace}
                  onChange={(e) => {
                    setDisableSpace(e.target.value.trim());
                  }}
                />
              </div>
              <p className="text-sm text-red-500">{fields.userName.errors}</p>
            </div>
          </CardContent>
          <CardFooter>
            <SubmitButton text="Submit" className="w-full" />
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default OnboardingPage;
