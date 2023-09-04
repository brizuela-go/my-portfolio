"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: any) {
    setLoading(true);
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f4776dce-3896-4ddb-bba9-194e23431cb7");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();

    if (result.success) {
      toast.success("Message sent successfully");
      setLoading(false);
      event.target.reset();
    } else {
      toast.error("Something went wrong, please try again");
      setLoading(false);
    }
  }

  return (
    <div>
      <Toaster />
      <form onSubmit={handleSubmit} className="space-y-10">
        <div className="flex max-sm:flex-col justify-center gap-4">
          <Input type="text" name="name" placeholder="Name" />
          <Input type="email" name="email" placeholder="Email" />
        </div>
        <Textarea name="message" placeholder="Type your message here" />
        <div className="flex justify-end gap-4">
          {loading ? (
            <Button disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
          ) : (
            <Button type="submit">Submit</Button>
          )}
        </div>
      </form>
    </div>
  );
}
