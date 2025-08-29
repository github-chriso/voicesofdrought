'use server';
/**
 * @fileOverview A flow to validate the accessibility of text in a landing page design.
 *
 * - accessibilityValidation - A function that handles the accessibility validation process.
 * - AccessibilityValidationInput - The input type for the accessibilityValidation function.
 * - AccessibilityValidationOutput - The return type for the accessibilityValidation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AccessibilityValidationInputSchema = z.object({
  designText: z
    .string()
    .describe('The text content from the landing page design to be validated.'),
});
export type AccessibilityValidationInput = z.infer<
  typeof AccessibilityValidationInputSchema
>;

const AccessibilityValidationOutputSchema = z.object({
  accessibilityReport: z.string().describe('A detailed report on the accessibility of the provided text, including contrast ratio analysis and WCAG compliance suggestions.'),
  isAccessible: z.boolean().describe('Whether the design text meets basic accessibility standards.'),
});
export type AccessibilityValidationOutput = z.infer<
  typeof AccessibilityValidationOutputSchema
>;

export async function accessibilityValidation(
  input: AccessibilityValidationInput
): Promise<AccessibilityValidationOutput> {
  return accessibilityValidationFlow(input);
}

const accessibilityValidationPrompt = ai.definePrompt({
  name: 'accessibilityValidationPrompt',
  input: {schema: AccessibilityValidationInputSchema},
  output: {schema: AccessibilityValidationOutputSchema},
  prompt: `You are an accessibility expert specializing in WCAG guidelines.

  You will analyze the provided text content from a landing page design to ensure compliance with accessibility standards, specifically for contrast ratios.
  You will determine if the design text meets accessibility standards and provide a detailed report, including suggestions for improvement.

  Text Content: {{{designText}}}

  Ensure that the accessibilityReport is detailed and includes specific contrast ratio analysis and WCAG compliance suggestions.
  The isAccessible field should reflect whether the text meets minimum accessibility requirements based on your analysis.
  `,
});

const accessibilityValidationFlow = ai.defineFlow(
  {
    name: 'accessibilityValidationFlow',
    inputSchema: AccessibilityValidationInputSchema,
    outputSchema: AccessibilityValidationOutputSchema,
  },
  async input => {
    const {output} = await accessibilityValidationPrompt(input);
    return output!;
  }
);
