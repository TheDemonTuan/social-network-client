import { z } from "zod";
import { strongPasswordRegex, vnPhoneRegex } from "@/lib/regex";

export const RegisterValidatorFormSchema = z.object({
  first_name: z
    .string({
      required_error: "A first name is required.",
    })
    .max(30, {
      message: "First name must be at most 30 characters.",
    })
    .regex(/^[a-zA-ZÀ-ỹ\s]+$/, {
      message: "First name must be letters.",
    }),
  last_name: z
    .string({
      required_error: "A last name is required.",
    })
    .max(30, {
      message: "Last name must be at most 30 characters.",
    })
    .regex(/^[a-zA-ZÀ-ỹ\s]+$/, {
      message: "Last name must be letters.",
    }),
  email: z
    .string({
      required_error: "An email is required.",
    })
    .email({
      message: "Email must be a valid email.",
    }),
  phone: z
    .string({
      required_error: "A phone number is required.",
    })
    .regex(vnPhoneRegex, "Invalid phone number!"),
  password: z
    .string({
      required_error: "A password is required.",
    })
    .regex(strongPasswordRegex, {
      message:
        "Password must be at least 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character.",
    }),
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
  gender: z.string({
    required_error: "Please select an gender.",
  }),
});

export type RegisterValidatorForm = z.infer<typeof RegisterValidatorFormSchema>;
