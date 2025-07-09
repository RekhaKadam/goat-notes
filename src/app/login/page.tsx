import AuthForm from "@/components/AuthForm";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

function LoginPage(){
    return( <div className="fixed inset-0 mt-20 flex flex-1 flex items-center justify-center">
        <Card className="w-full max-w-md p-6">
    <CardHeader className="mb-4">
        <CardTitle className="text-3xl font-semibold text-center">Login</CardTitle>
    </CardHeader>

    <AuthForm type="login" />
        </Card>
        </div>
);
}
export default LoginPage;


