"use client";
import React from "react";

import axios from "axios";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Role, useKYPStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  username: z.string().min(2).max(50),
  password: z.string().min(8).max(50),
  type: z.enum(["user", "restaurant"]),
});

function Page() {
  const { login, logout, user } = useKYPStore();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      username: "",
      password: "",
      type: "user",
    },
  });

  if (user !== null) {
    router.push("/dashboard");
  }

  const handleRegister = () => {
    console.log(form.getValues());
    try {
      axios
        .post(process.env.API_URL + "auth/register", form.getValues())
        .then((e) => {
          console.log(e, "this is response from server");
        });
    } catch (e) {
      console.log(e, "this is error from server");
    }
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    handleRegister();

    // login({ id: 1, name: values.username, role: Role.USER });

    console.log(values);
  }
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <h1 className="text-2xl font-semibold">Register</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-2 min-w-[400px]"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Username" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Account Type</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex space-x-4 mt-4 "
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="user" />
                      </FormControl>
                      <FormLabel className="font-normal">User</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="restaurant" />
                      </FormControl>
                      <FormLabel className="font-normal">Restaurant</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="mt-8 flex flex-col gap-4">
            <Button className="w-full mt-8" type="submit">
              Register
            </Button>
            <Link
              className={buttonVariants({
                variant: "ghost",
                className: "w-full",
              })}
              href="/login"
            >
              Login
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default Page;
