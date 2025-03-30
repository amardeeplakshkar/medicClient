import { ArrowRight } from "lucide-react";

export const HowItWorks = () => {
  const patientSteps = [
    {
      number: "01",
      title: "Create an Account",
      description: "Sign up as a patient and complete your health profile with relevant medical history."
    },
    {
      number: "02",
      title: "Post Your Health Concern",
      description: "Share your symptoms and health issues in detail to find the right medical help."
    },
    {
      number: "03",
      title: "Connect with Doctors",
      description: "Review responses from qualified doctors and choose the best match for your needs."
    },
    {
      number: "04",
      title: "Begin Treatment",
      description: "Start your treatment journey with your chosen healthcare professional."
    }
  ];

  const doctorSteps = [
    {
      number: "01",
      title: "Verify Your Credentials",
      description: "Create your professional profile and verify your medical credentials and specializations."
    },
    {
      number: "02",
      title: "Browse Patient Posts",
      description: "Find patients whose health concerns match your expertise and specialization."
    },
    {
      number: "03",
      title: "Offer Your Expertise",
      description: "Respond to patient posts and explain how you can help with their specific needs."
    },
    {
      number: "04",
      title: "Start Treatment",
      description: "Begin treating patients and build long-term professional relationships."
    }
  ];

  return (
    <div className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform makes it easy for patients to find the right medical help and for doctors to connect with patients who need their expertise.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1">
            <div className="p-6 bg-blue-50 rounded-t-xl">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">For Patients</h3>
              <p className="text-blue-700">Find the right doctor for your specific health needs.</p>
            </div>
            <div className="border border-blue-100 rounded-b-xl bg-white">
              {patientSteps.map((step, index) => (
                <div 
                  key={index} 
                  className={`p-6 ${index !== patientSteps.length - 1 ? 'border-b border-blue-100' : ''}`}
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 font-bold">{step.number}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2 text-gray-900">{step.title}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  {index !== patientSteps.length - 1 && (
                    <div className="flex justify-center mt-4">
                      <ArrowRight className="text-blue-300 h-6 w-6" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <div className="p-6 bg-green-50 rounded-t-xl">
              <h3 className="text-2xl font-bold text-green-800 mb-4">For Doctors</h3>
              <p className="text-green-700">Connect with patients who need your specific expertise.</p>
            </div>
            <div className="border border-green-100 rounded-b-xl bg-white">
              {doctorSteps.map((step, index) => (
                <div 
                  key={index} 
                  className={`p-6 ${index !== doctorSteps.length - 1 ? 'border-b border-green-100' : ''}`}
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                        <span className="text-green-600 font-bold">{step.number}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2 text-gray-900">{step.title}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  {index !== doctorSteps.length - 1 && (
                    <div className="flex justify-center mt-4">
                      <ArrowRight className="text-green-300 h-6 w-6" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};