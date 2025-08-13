"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import { useI18n } from "@/context/i18n";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { FacebookIcon, InstagramIcon, TikTokIcon, WhatsAppIcon } from "../icons";

export function Footer() {
  const { t } = useI18n();
  const { toast } = useToast();

  const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(values);
    toast({
      title: t('contactSuccess'),
    });
    form.reset();
  }

  const legalLinks = [
    { href: "/faq", label: t('legalFAQ') },
    { href: "/terms", label: t('legalTerms') },
    { href: "/privacy", label: t('legalPrivacy') },
  ];

  const socialLinks = [
    { href: "https://tiktok.com", label: "TikTok", icon: TikTokIcon },
    { href: "https://instagram.com", label: "Instagram", icon: InstagramIcon },
    { href: "https://facebook.com", label: "Facebook", icon: FacebookIcon },
  ];

  return (
    <>
      <footer className="w-full border-t bg-background">
        <div className="container grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
          <div className="space-y-4 md:col-span-1">
            <h3 className="font-headline text-lg font-semibold">{t('contactTitle')}</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('contactName')}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('contactName')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('contactEmail')}</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder={t('contactEmail')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('contactMessage')}</FormLabel>
                      <FormControl>
                        <Textarea placeholder={t('contactMessage')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">{t('contactSend')}</Button>
              </form>
            </Form>
          </div>
          <div className="md:col-span-2 flex flex-col justify-between items-start md:items-end pt-8 md:pt-0">
             <div>
                <div className="flex items-center space-x-4">
                  {socialLinks.map((social) => (
                    <Link
                      href={social.href}
                      key={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary"
                    >
                      <social.icon className="h-6 w-6" />
                      <span className="sr-only">{social.label}</span>
                    </Link>
                  ))}
                </div>
            </div>
             <div className="mt-8 md:mt-0 text-left md:text-right">
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-sm text-muted-foreground">
                    {legalLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="hover:text-primary">
                        {link.label}
                        </Link>
                    ))}
                </div>
                <p className="mt-4 text-sm text-muted-foreground">&copy; {new Date().getFullYear()} MundiSite. All Rights Reserved.</p>
             </div>
          </div>
        </div>
      </footer>
      <Link 
        href="https://wa.me/1234567890" // Replace with actual WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110"
      >
        <WhatsAppIcon className="h-8 w-8" stroke="white" fill="white" />
      </Link>
    </>
  );
}
