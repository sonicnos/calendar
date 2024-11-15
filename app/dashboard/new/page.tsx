import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const NewEventRoute = () => {
  return (
    <div className="w-full h-full flex flex-1 items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Add new appointment type</CardTitle>
          <CardDescription>
            Create new appointment type that allows people to book you!
          </CardDescription>
        </CardHeader>
        <form action="">
          <CardContent className="grid gap-y-5">
            <div className="flex flex-col gap-y-2">
              <Label>Title</Label>
              <Input placeholder="30 Minutes meeting" />
            </div>
            <div className="flex flex-col gap-y-2">
              <Label>URL Slug</Label>
              <div className="flex rounded-md">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-muted bg-muted text-sm text-muted-foreground">
                  loukasdev.com/
                </span>
                <Input
                  placeholder="Example-url-1"
                  className="rounded-l-none "
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <Label>Description</Label>
              <Textarea placeholder="Meet me in this meeting to meet me!" />
            </div>
          </CardContent>
        </form>
      </Card>
    </div>
  );
};

export default NewEventRoute;
