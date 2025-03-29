import React, { useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import PatientForm from './forms/PatientForm';
import DoctorForm from './forms/DoctorForm';
import NGOForm from './forms/NgoForm';
const SignUp = () =>
{
    const [activeTab, setActiveTab] = useState("patient");
    return (
        <div className="container mx-auto py-10">
            <h1 className="text-2xl font-bold mb-6 text-center">Complete Your Profile</h1>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-2xl mx-auto">
                <TabsList className="grid grid-cols-3 w-full">
                    <TabsTrigger value="patient">Patient</TabsTrigger>
                    <TabsTrigger value="doctor">Doctor/Hospital</TabsTrigger>
                    <TabsTrigger value="ngo">NGO</TabsTrigger>
                </TabsList>

                <TabsContent value="patient">
                    <PatientForm />
                </TabsContent>

                <TabsContent value="doctor">
                    <DoctorForm />
                </TabsContent>

                <TabsContent value="ngo">
                    <NGOForm />
                </TabsContent>
            </Tabs>

        </div>
    )
}

export default SignUp