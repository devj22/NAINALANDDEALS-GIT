import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { insertMessageSchema, type InsertMessage } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

type ContactFormValues = InsertMessage;

const ContactSection = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      location: "",
      message: "",
      source: "contact"
    },
  });

  const mutation = useMutation({
    mutationFn: async (values: ContactFormValues) => {
      console.log('Submitting message:', values);
      try {
        const response = await apiRequest('POST', '/api/messages', values);
        console.log('Message submission response:', response);
        return response;
      } catch (error) {
        console.error('Message submission error:', error);
        throw error;
      }
    },
    onSuccess: (data) => {
      console.log('Message submitted successfully:', data);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset({
        name: "",
        email: "",
        phone: "",
        location: "",
        message: "",
        source: "contact"
      });
      setSubmitting(false);
    },
    onError: (error: any) => {
      console.error('Mutation error:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
      setSubmitting(false);
    },
  });

  async function onSubmit(values: ContactFormValues) {
    try {
      setSubmitting(true);
      await mutation.mutateAsync(values);
    } catch (error) {
      console.error('Form submission error:', error);
    }
  }

  return (
    <section className="py-20 bg-[#F8F8F8]" id="contact">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-stretch gap-12">
          <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions about our properties or need expert advice? Fill out the form below and our team will get back to you promptly.
            </p>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
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
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="Your phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your location" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Your message" 
                          className="min-h-32"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-[#FF6B35] text-white hover:bg-opacity-90"
                  disabled={submitting}
                >
                  {submitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </form>
            </Form>
          </div>
          
          <div className="lg:w-1/2 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-medium mb-3">Contact Info</h4>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-600">
                    <i className="fas fa-phone text-[#FF6B35] mr-3"></i>
                    <a href="tel:+918779987132" className="hover:text-[#FF6B35] transition">
                      +91 877 998 7132
                    </a>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <i className="fas fa-envelope text-[#FF6B35] mr-3"></i>
                    <a href="mailto:infonainaland@gmail.com" className="hover:text-[#FF6B35] transition">
                      infonainaland@gmail.com
                    </a>
                  </li>
                  <li className="flex items-start text-gray-600">
                    <i className="fas fa-map-marker-alt text-[#FF6B35] mr-3 mt-1"></i>
                    <p>
                      2506 the park luxury Apt. Oshiwara<br />
                      Andheri West<br />
                      Mumbai 53
                    </p>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Business Hours</h4>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-600">
                    <i className="fas fa-clock text-[#FF6B35] mr-3"></i>
                    <div>
                      <p>Monday - Saturday</p>
                      <p>9:00 AM - 6:00 PM</p>
                    </div>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <i className="fas fa-ban text-[#FF6B35] mr-3"></i>
                    <p>Sunday Closed</p>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="https://www.youtube.com/@theurbanips" className="text-white hover:text-[#FF6B35] transition">
                    <i className="fab fa-youtube text-xl"></i>
                  </a>
                  <a href="#" className="text-white hover:text-[#FF6B35] transition">
                    <i className="fab fa-twitter text-xl"></i>
                  </a>
                  <a href="https://www.instagram.com/nainalanddeals/?hl=en" className="text-white hover:text-[#FF6B35] transition">
                    <i className="fab fa-instagram text-xl"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/urban-investments-&-property-solutions/people/" className="text-white hover:text-[#FF6B35] transition">
                    <i className="fab fa-linkedin-in text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.3310737836147!2d72.83659531469864!3d19.13835478705363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7c8d0d0c0a1%3A0x3b0b0b0b0b0b0b0b!2sOshiwara%2C%20Andheri%20West%2C%20Mumbai%2C%20Maharashtra%20400053!5e0!3m2!1sen!2sin!4v1625123456789!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
