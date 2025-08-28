import FormSelect from "@/components/shared/select";
import { constants } from "@/constants";
import React from "react";
import AuthInput from "../auth/input";
import Button from "@/components/shared/button";

const TradeCrypto = () => {
  return (
    <div className="w-full sm:mt-5 space-y-2">
      <FormSelect
        label="Cryptocurrency"
        options={constants.DUMMY_RATES.map((rate) => ({
          icon: rate.icon,
          label: rate.name,
          value: rate.name,
        }))}
      />
      <AuthInput label="Amount in USD" placeholder="Enter the amount" />
      <AuthInput label="Amount(NGN)" placeholder="" readOnly />
      <div className="my-4">
        <Button title="Trade Crypto" />
      </div>
      <p className="text-[#333F51] text-xs text-center">
        Note: This is an estimated Rate. Actual rate May differ
      </p>
    </div>
  );
};

export default TradeCrypto;
