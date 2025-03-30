import { CheckCircle2, MessageSquare, UserRound, Stethoscope, Lock, FileText } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: <MessageSquare className="h-6 w-6 text-blue-600" />,
      title: "Post Health Concerns",
      description: "Patients can easily share their health issues and symptoms to find the right medical help.",
      for: "patients"
    },
    {
      icon: <UserRound className="h-6 w-6 text-blue-600" />,
      title: "Patient Privacy",
      description: "Your personal information is protected, with options to remain anonymous when posting.",
      for: "patients"
    },
    {
      icon: <FileText className="h-6 w-6 text-blue-600" />,
      title: "Health Journey Tracking",
      description: "Document your treatment progress and keep all medical conversations in one place.",
      for: "patients"
    },
    {
      icon: <Stethoscope className="h-6 w-6 text-green-600" />,
      title: "Find Ideal Patients",
      description: "Connect with patients who need your specific expertise and build your practice.",
      for: "doctors"
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-green-600" />,
      title: "Verified Credentials",
      description: "Showcase your qualifications and specialties with our verification system.",
      for: "doctors"
    },
    {
      icon: <Lock className="h-6 w-6 text-green-600" />,
      title: "Secure Communication",
      description: "Communicate securely with patients and manage your appointments efficiently.",
      for: "doctors"
    }
  ];

  return (
    <div className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Features for Everyone</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform offers specialized tools for both patients seeking help and doctors offering treatment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`p-6 rounded-xl border ${feature.for === "patients" ? "border-blue-100 bg-blue-50/30" : "border-green-100 bg-green-50/30"} transition-all duration-300 hover:shadow-md`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-2 rounded-lg ${feature.for === "patients" ? "bg-blue-100" : "bg-green-100"}`}>
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <span className={`text-xs uppercase font-semibold px-2 py-1 rounded ${feature.for === "patients" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"}`}>
                  For {feature.for}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};