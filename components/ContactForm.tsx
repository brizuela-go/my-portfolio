"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(event: any) {
    event.preventDefault();

    // Get the form data
    const formData = new FormData(event.target);

    // Create an object from the form data
    const object = Object.fromEntries(formData);

    // Check if any form field has less than 3 characters
    const isInvalid = Object.values(object).some((value) => value.length < 5);

    if (isInvalid) {
      // Display an error toast if any field has less than 5 characters
      toast.error("Form fields must have at least 5 characters");
      setError(true);
      return; // Stop form submission
    }

    // Add additional data to the form object
    object.access_key = "f4776dce-3896-4ddb-bba9-194e23431cb7";

    // Convert the object to JSON
    const json = JSON.stringify(object);

    setLoading(true);

    // Send the form data to the API
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
      event.target.reset();
    } else {
      toast.error("Something went wrong, please try again");
    }

    setLoading(false);
  }

  return (
    <div className="z-10">
      <Toaster />
      <form onSubmit={handleSubmit} className="space-y-10">
        <div className="flex max-sm:flex-col justify-center gap-4">
          <Input
            className={`${error && "border-destructive"}`}
            type="text"
            name="name"
            onChange={() => setError(false)}
            placeholder="Name"
          />
          <Input
            className={`${error && "border-destructive"}`}
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <Textarea
          className={`${error && "border-destructive"}`}
          name="message"
          placeholder="Type your message here"
        />
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
