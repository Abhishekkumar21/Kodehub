import React, { useState } from 'react';
import {Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { FcGoogle } from "react-icons/fc";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";


export const SignupForm = () => {
    const [showPassword,setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();
    
    //Signup from state
    const [name, setName] = useState('');
    const [signupEmail, setSignupEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();

        if(!agreeTerms){
            toast({
                title: "Error",
                description: "Please agree to the terms and conditions.",
                variant: "destructive"
            });
            return;
        }

        setIsLoading(true);
         
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            toast({
            title: "Account created!",
            description: "Welcome to KodeHub. Your account has been created successfully.",
            });
            // In a real app, you would redirect or update state after successful signup
        }, 1500);
    }

        return(
            <Card>
                      <CardHeader>
                        <CardTitle>Create an account</CardTitle>
                        <CardDescription>Join KodeHub to share and discover code</CardDescription>
                      </CardHeader>
                      <form onSubmit={handleSignup}>
                        <CardContent className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input 
                              id="name"
                              placeholder="John Doe" 
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              required
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="signup-email">Email</Label>
                            <div className="relative">
                              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                              <Input 
                                id="signup-email"
                                type="email" 
                                placeholder="you@example.com" 
                                className="pl-10"
                                value={signupEmail}
                                onChange={(e) => setSignupEmail(e.target.value)}
                                required
                              />
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="signup-password">Password</Label>
                            <div className="relative">
                              <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                              <Input 
                                id="signup-password"
                                type={showPassword ? "text" : "password"} 
                                className="pl-10"
                                value={signupPassword}
                                onChange={(e) => setSignupPassword(e.target.value)}
                                required
                              />
                              <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                              >
                                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                              </button>
                            </div>
                          </div>
        
                          <div className="flex items-center space-x-2">
                            <Checkbox 
                              id="terms" 
                              checked={agreeTerms}
                              onCheckedChange={(checked) => setAgreeTerms(checked === true)}
                            />
                            <label
                              htmlFor="terms"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              I agree to the{" "}
                              <a href="#" className="text-kodehub-purple hover:underline">
                                terms of service
                              </a>{" "}
                              and{" "}
                              <a href="#" className="text-kodehub-purple hover:underline">
                                privacy policy
                              </a>
                            </label>
                          </div>
                        </CardContent>
                        
                        <CardFooter className="flex flex-col space-y-4">
                          <Button type="submit" className="w-full" disabled={isLoading}>
                            {isLoading ? "Creating account..." : "Create account"}
                          </Button>
                          
                          <div className="relative w-full">
                            <div className="absolute inset-0 flex items-center">
                              <span className="w-full border-t" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                              <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                            </div>
                          </div>
                          
                          <Button variant="outline" className="w-full" type="button">
                            <FcGoogle className="mr-2 h-4 w-4" />
                            Google
                          </Button>
                        </CardFooter>
                      </form>
                    </Card>
        )
}