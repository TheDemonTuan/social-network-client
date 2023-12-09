import { z } from "zod";
import { emailRegex, strongPasswordRegex, vnPhoneRegex } from "@/lib/regex";

export const LoginValidatorFormSchema = z.object({
  email: z
    .string({
      required_error: "An email or phone is required.",
    }).refine((value) => {
      return emailRegex.test(value) || vnPhoneRegex.test(value);
    }, "Invalid email or phone."),
  password: z
    .string({
      required_error: "A password is required.",
    })
    .regex(strongPasswordRegex, {
      message:
        "Password must be at least 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character.",
    }),
});

export type LoginValidatorForm = z.infer<typeof LoginValidatorFormSchema>;
