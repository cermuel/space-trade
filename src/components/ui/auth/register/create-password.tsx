"use client";
import AuthHeader from "@/components/layout/AuthLayout/AuthHeader";
import React, { useState } from "react";
import AuthInput from "../input";
import Button from "@/components/shared/button";
import { helpers } from "@/utils/helpers";
import PasswordCheck from "./check";

const CreatePassword = () => {
  const [password, setPassword] = useState("Sa");
  const checks = helpers.validatePassword(password);
  console.log({ password });
  return (
    <>
      <AuthHeader
        extra="Step 3/3"
        title="Create Password"
        text="Complete this form to proceed"
      />

      <div className="flex flex-col gap-4 max-sm:px-4 w-full flex-1">
        <AuthInput
          label="Email"
          placeholder="Spacetrade@mail.com"
          icon="/icons/email.svg"
        />
        <AuthInput
          label="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          icon="/icons/lock.svg"
        />
        <div className="flex flex-wrap items-center gap-2">
          <PasswordCheck text="At least 8 characters" isValid={checks.length} />
          <PasswordCheck
            text="1 Capital Letter {A - Z}"
            isValid={checks.uppercase}
          />
          <PasswordCheck
            text="small letters {a - z}"
            isValid={checks.lowercase}
          />
          <PasswordCheck text="Number {0 -9}" isValid={checks.number} />
          <PasswordCheck
            text="Special character{e.g @ #}"
            isValid={checks.special}
          />
        </div>
        <AuthInput
          label="Confirm Password"
          type="password"
          placeholder="Type password here"
          icon="/icons/lock.svg"
        />

        <Button title="Next" disabled className="max-sm:mt-auto" />
      </div>
    </>
  );
};

export default CreatePassword;
