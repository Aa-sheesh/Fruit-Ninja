import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { useUser } from "@/contexts/UserContext";
import { useNavigate } from "react-router-dom";


const SignupPage = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);

  const { setUserName, setUserMobile } = useUser();
  const navigate = useNavigate();

  
  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) {
      toast.error("Please enter your phone number");
      return;
    }
    setShowOtp(true);
    toast.success("OTP sent to your phone");
  };

  const handleResendOtp = () => {
    toast.success("OTP resent to your phone");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || (showOtp && otp.length !== 4)) {
      toast.error("Please fill all required fields");
      return;
    }

    setUserName(name.trim());
    setUserMobile(phone.trim());

    toast.success("Signup successful!");

    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <div className="fruit-container py-8">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-2xl p-8 shadow-sm border">
          <h1 className="text-2xl font-mono text-center mb-6">Signup/Login</h1>

          <form onSubmit={showOtp ? handleSubmit : handleVerify}>
            <div className="space-y-6">
              <Input
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-lg"
              />

              <div className="flex gap-2">
                <Input
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/, ""))}
                  className="rounded-lg flex-1"
                />
                {!showOtp && (
                  <Button 
                    type="submit"
                    className="bg-fruit-blue hover:bg-blue-200 text-blue-800"
                  >
                    Verify
                  </Button>
                )}
              </div>

              {showOtp && (
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <InputOTP maxLength={4} value={otp} onChange={setOtp}>
                      <InputOTPGroup>
                        {[0, 1, 2, 3].map((i) => (
                          <InputOTPSlot
                            key={i}
                            index={i}
                            className="rounded-lg bg-fruit-blue bg-opacity-20"
                          />
                        ))}
                      </InputOTPGroup>
                    </InputOTP>
                  </div>

                  <Button
                    type="button"
                    variant="link"
                    onClick={handleResendOtp}
                    className="w-full text-gray-500"
                  >
                    Resend OTP
                  </Button>

                  <Button 
                    type="submit"
                    className="w-full bg-fruit-pink hover:bg-pink-200 text-pink-800"
                    disabled={otp.length !== 4}

                  >
                    Submit
                  </Button>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
