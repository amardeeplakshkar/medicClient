import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NGOForm ()
{
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    orgName: '',
    missionStatement: '',
    certifications: '',
    address: '',
    websiteUrl: '',
    email: "",
    password: ""
  });

  const handleSubmit = async (e) =>
  {
    e.preventDefault();
    await fetch('http://localhost:3000/api/auth/singup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        certifications: formData.certifications.split(',').map(c => c.trim()),
        role: 'ngo',
      }),
    }).then(async (res) =>
    {
      const data = await res.json();
      if (res.ok)
      {
        localStorage.setItem("token", data.token); // Store token in localStorage
        localStorage.setItem("user", JSON.stringify(data.user)); // Store user info
        navigate("/dashboard");
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded-lg shadow">
      <div>
        <label className="block text-sm font-medium text-gray-700">Organization Name</label>
        <input
          type="text"
          required
          value={formData.orgName}
          onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          required
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Mission Statement</label>
        <textarea
          required
          value={formData.missionStatement}
          onChange={(e) => setFormData({ ...formData, missionStatement: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          rows={3}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Certifications (comma-separated)</label>
        <input
          type="text"
          required
          value={formData.certifications}
          onChange={(e) => setFormData({ ...formData, certifications: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="ISO 9001, NGO Registration"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Address</label>
        <input
          type="text"
          required
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Website URL</label>
        <input
          type="url"
          value={formData.websiteUrl}
          onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="https://example.org"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Register as NGO
      </button>
    </form>
  )
}
