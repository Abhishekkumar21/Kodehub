import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { FcGoogle } from "react-icons/fc";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from "@/hooks/use-toast";


export const LoginForm = () => {
        //login form state
        const [loginEmail, setLoginEmail] = useState('');
        const [loginPassword, setLoginPassword] = useState('');  
        const [showPassword,setShowPassword] = useState(false);
        const [isLoading, setIsLoading] = useState(false);
        const { toast } = useToast();

        
    const handleLogin = (e:React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
    
        //simulating API Call
        setTimeout(() => {
            setIsLoading(false);
            toast({
                title: "Success!",
                description: "You have been logged in successfully."
            });           
            }, 1500);
        }

        return(
            <Card>
                <CardHeader>
                    <CardTitle>Welcome back</CardTitle>
                        <CardDescription>Login to your KodeHub account</CardDescription>
                </CardHeader>
                
                <form onSubmit={handleLogin}>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="login-email">Email</Label>
                            <div className="relative">
                              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                              <Input 
                                id="login-email"
                                type="email" 
                                placeholder="you@example.com" 
                                className="pl-10"
                                value={loginEmail}
                                onChange={(e) => setLoginEmail(e.target.value)}
                                required
                              />
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <Label htmlFor="login-password">Password</Label>
                              <Link to="#" className="text-sm text-kodehub-purple hover:text-kodehub-purple/90">
                                Forgot password?
                              </Link>
                            </div>
                            <div className="relative">
                              <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                              <Input 
                                id="login-password"
                                type={showPassword ? "text" : "password"} 
                                className="pl-10"
                                value={loginPassword}
                                onChange={(e) => setLoginPassword(e.target.value)}
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
                    </CardContent>
                        
                 <CardFooter className="flex flex-col space-y-4">
                    <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Logging in..." : "Log in"}
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
