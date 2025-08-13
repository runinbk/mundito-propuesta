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
import { FacebookIcon, InstagramIcon, MunditoysLogo } from "../icons";
import { Phone, Twitter } from "lucide-react";

export function Footer() {
  const { t } = useI18n();
  const { toast } = useToast();

  const formSchema = z.object({
    name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
    email: z.string().email({ message: "Por favor, introduce un correo electrónico válido." }),
    subject: z.string().min(5, { message: "El asunto debe tener al menos 5 caracteres." }),
    message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
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

  const socialLinks = [
    { href: "https://twitter.com", label: "Twitter", icon: Twitter },
    { href: "https://facebook.com", label: "Facebook", icon: FacebookIcon },
    { href: "https://instagram.com", label: "Instagram", icon: InstagramIcon },
  ];

  const quickLinks = [
    { href: "/products", label: t('navProducts') },
    { href: "/locations", label: t('navLocations') },
    { href: "/about", label: t('navAbout') },
    { href: "/faq", label: t('legalFAQ') },
    { href: "/shipping", label: t('shippingReturns') },
    { href: "/privacy", label: t('legalPrivacy') },
  ];

  return (
    <>
      <footer className="w-full bg-[#002D62] text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Col 1: Brand Info */}
            <div className="md:col-span-3 space-y-4">
              <MunditoysLogo className="text-primary h-10 w-auto" fill="white" />
              <p className="text-sm text-gray-300">{t('footerSlogan')}</p>
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    href={social.href}
                    key={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white"
                  >
                    <social.icon className="h-5 w-5" />
                    <span className="sr-only">{social.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Col 2: Contact Form */}
            <div className="md:col-span-5">
              <h3 className="font-headline text-lg font-semibold mb-4">{t('contactTitle')}</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('contactName')}</FormLabel>
                          <FormControl>
                            <Input placeholder={t('contactNamePlaceholder')} {...field} className="bg-[#003f88] border-[#0052b3] text-white placeholder:text-gray-400" />
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
                            <Input type="email" placeholder={t('contactEmailPlaceholder')} {...field} className="bg-[#003f88] border-[#0052b3] text-white placeholder:text-gray-400" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                   <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('contactSubject')}</FormLabel>
                          <FormControl>
                            <Input placeholder={t('contactSubjectPlaceholder')} {...field} className="bg-[#003f88] border-[#0052b3] text-white placeholder:text-gray-400" />
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
                          <Textarea placeholder={t('contactMessagePlaceholder')} {...field} className="bg-[#003f88] border-[#0052b3] text-white placeholder:text-gray-400" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">{t('contactSend')}</Button>
                </form>
              </Form>
            </div>
            
            {/* Col 3: Quick Links */}
            <div className="md:col-span-3 md:col-start-10">
                 <h3 className="font-headline text-lg font-semibold mb-4">{t('quickLinks')}</h3>
                 <ul className="space-y-2">
                    {quickLinks.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} className="text-sm text-gray-300 hover:text-white hover:underline">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                 </ul>
            </div>

          </div>
        </div>
        <div className="border-t border-blue-800">
            <div className="container mx-auto px-4 py-4 text-center text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Munditoys. {t('footerRights')}
            </div>
        </div>
      </footer>
      <Link 
        href="https://wa.me/59112345678" // Replace with actual WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110"
      >
        <Phone className="h-7 w-7" />
      </Link>
    </>
  );
}
