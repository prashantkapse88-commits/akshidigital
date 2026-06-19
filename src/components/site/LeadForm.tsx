import { useState } from "react";
import { toast } from "sonner";
import { ArrowRight, CheckCircle2, Sparkles, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export function LeadForm({
  title = "Get a FREE Website & SEO Audit",
  defaultService,
}: {
  title?: string;
  defaultService?: string;
}) {
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpCode, setOtpCode] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState<string | null>(null);
  const [verified, setVerified] = useState(false);
  const [sending, setSending] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  function isValidPhone(p: string) {
    const digits = p.replace(/\D/g, "");
    return digits.length >= 10 && digits.length <= 13;
  }

  function sendOtp() {
    if (!isValidPhone(phone)) {
      toast.error("Enter a valid phone number first");
      return;
    }
    setSending(true);
    const code = String(Math.floor(100000 + Math.random() * 900000));
    setTimeout(() => {
      setGeneratedOtp(code);
      setOtpSent(true);
      setSending(false);
      setVerified(false);
      setOtpCode("");
      toast.success(`OTP sent to ${phone}`, {
        description: `Demo code: ${code} (in production this is sent via SMS)`,
      });
      // 30s cooldown for resend
      setCooldown(30);
      const interval = setInterval(() => {
        setCooldown((c) => {
          if (c <= 1) {
            clearInterval(interval);
            return 0;
          }
          return c - 1;
        });
      }, 1000);
    }, 600);
  }

  function verifyOtp(value: string) {
    setOtpCode(value);
    if (value.length === 6) {
      if (value === generatedOtp) {
        setVerified(true);
        toast.success("Phone number verified ✓");
      } else {
        setVerified(false);
        toast.error("Incorrect OTP. Please try again.");
      }
    } else {
      setVerified(false);
    }
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!verified) {
      toast.error("Please verify your mobile number first");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Request received!", {
        description: "Our team will reach out within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
      setPhone("");
      setOtpSent(false);
      setVerified(false);
      setOtpCode("");
      setGeneratedOtp(null);
    }, 700);
  }

  return (
    <section id="audit" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-hero p-8 text-white shadow-glow sm:p-14">
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />
          <div className="relative grid gap-10 lg:grid-cols-2">
            <div>
              <Badge className="gap-2 border-white/15 bg-white/10 text-white">
                <Sparkles className="h-3.5 w-3.5 text-[#06B6D4]" /> Free for India and overseas businesses
              </Badge>
              <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                {title}
              </h2>
              <p className="mt-4 max-w-md text-white/75">
                We'll audit your current website, identify local and global SEO opportunities, and send a personalized
                growth roadmap — at no cost.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-white/85">
                {[
                  "25-point technical SEO review",
                  "Local and international keyword opportunities",
                  "Speed & mobile experience report",
                  "Conversion improvement ideas",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#10B981]" /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <form onSubmit={onSubmit} className="rounded-2xl glass p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" name="name" placeholder="Your name" required />
                <Field label="Business Name" name="business" placeholder="Acme Pvt Ltd" required />

                {/* Phone with OTP */}
                <div className="sm:col-span-2">
                  <Label htmlFor="phone" className="text-white/85">
                    Phone {verified && <span className="ml-1 text-[#10B981]">✓ Verified</span>}
                  </Label>
                  <div className="mt-1.5 flex gap-2">
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 9630040607"
                      required
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (verified || otpSent) {
                          setVerified(false);
                          setOtpSent(false);
                          setOtpCode("");
                          setGeneratedOtp(null);
                        }
                      }}
                      disabled={verified}
                      className="border-white/15 bg-white/5 text-white placeholder:text-white/40 focus-visible:border-[#06B6D4] focus-visible:ring-0 disabled:opacity-70"
                    />
                    <Button
                      type="button"
                      onClick={sendOtp}
                      disabled={sending || verified || cooldown > 0 || !isValidPhone(phone)}
                      className="shrink-0 bg-white/15 text-white hover:bg-white/25"
                    >
                      {verified
                        ? "Verified"
                        : sending
                        ? "Sending..."
                        : cooldown > 0
                        ? `Resend in ${cooldown}s`
                        : otpSent
                        ? "Resend OTP"
                        : "Send OTP"}
                    </Button>
                  </div>

                  {otpSent && !verified && (
                    <div className="mt-3 rounded-xl border border-white/15 bg-white/5 p-4">
                      <div className="mb-2 flex items-center gap-2 text-sm text-white/85">
                        <ShieldCheck className="h-4 w-4 text-[#06B6D4]" />
                        Enter the 6-digit OTP sent to {phone}
                      </div>
                      <InputOTP maxLength={6} value={otpCode} onChange={verifyOtp}>
                        <InputOTPGroup>
                          {[0, 1, 2, 3, 4, 5].map((i) => (
                            <InputOTPSlot
                              key={i}
                              index={i}
                              className="border-white/20 bg-white/10 text-white"
                            />
                          ))}
                        </InputOTPGroup>
                      </InputOTP>
                    </div>
                  )}
                </div>

                <Field label="Email" name="email" placeholder="you@email.com" type="email" required className="sm:col-span-2" />
                <Field
                  label="Website URL"
                  name="website"
                  placeholder="https://yoursite.com"
                  className="sm:col-span-2"
                />
                <div className="sm:col-span-2">
                  <Label htmlFor="service" className="text-white/85">
                    Service Required
                  </Label>
                  <select
                    id="service"
                    name="service"
                    className="mt-1.5 w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-[#06B6D4]"
                    required
                    defaultValue={defaultService ?? ""}
                  >
                    <option value="" disabled className="text-foreground">
                      Choose a service
                    </option>
                    {[
                      "Website Development",
                      "SEO Services",
                      "Local SEO Indore",
                      "E-Commerce Store",
                      "WordPress Development",
                      "Google Business Profile",
                      "Website Maintenance",
                    ].map((s) => (
                      <option key={s} className="text-foreground">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={loading || !verified}
                className="mt-6 w-full bg-brand-gradient text-white shadow-glow hover:opacity-90 disabled:opacity-60"
              >
                {loading ? "Sending..." : verified ? "Get My Free Audit" : "Verify Mobile to Continue"}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <p className="mt-3 text-center text-xs text-white/60">
                No spam. We respond within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required,
  className,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <Label htmlFor={name} className="text-white/85">
        {label}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-1.5 border-white/15 bg-white/5 text-white placeholder:text-white/40 focus-visible:border-[#06B6D4] focus-visible:ring-0"
      />
    </div>
  );
}
