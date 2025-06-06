import React, { useEffect } from "react";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-[#F4E3FA] xl:px-[120px] xl:py-10 px-10 py-5 min-h-screen flex flex-col items-center">
      <img src="/footerlogo.png" className="w-16" />
      <div className="my-10 flex flex-col gap-7 w-full">
        <h1 className="text-2xl text-[#A23CC6] font-semibold text-center">
          Privacy Policy
        </h1>
        <div className="flex flex-col gap-7 items-start">
          <p className="">
            Effective Date: <span className="font-semibold">01/01/2025</span>
          </p>
          <p>
            At Tron Academy, we value your privacy and are committed to
            protecting the personal data of our students and users. This Privacy
            Policy outlines how we collect, use, store, and protect your
            information when you use the App. By accessing or using the App, you
            agree to the practices described in this policy.
          </p>
          <div className="flex flex-col gap-3">
            <p className="font-semibold">1. About Tron Academy</p>
            <p>
              Tron Academy is an educational platform offering live and
              interactive courses in Digital Marketing, Coding, and Multimedia.
              The App enables students from around the globe to attend live
              classes, access recorded sessions, complete modules, participate
              in tests, and track their progress.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-semibold">2. Information We Collect</p>
            <p>
              We may collect and process the following types of personal data:
            </p>
            <ul className="space-y-4 list-disc list-inside">
              <li>
                <span className="font-semibold">
                  a. Personal Identification Data
                </span>
                <ul className="ml-6 list-disc">
                  <li>Full Name</li>
                  <li>Email Address</li>
                  <li>Phone Number</li>
                  <li>Date of Birth</li>
                  <li>Profile Photo (if uploaded)</li>
                </ul>
              </li>

              <li>
                <span className="font-semibold">
                  b. Account and Authentication Data
                </span>
                <ul className="ml-6 list-disc">
                  <li>
                    Login Credentials
                    <ul className="ml-6 list-disc">
                      <li>Username</li>
                      <li>Password</li>
                    </ul>
                  </li>
                  <li>User Preferences and Settings</li>
                </ul>
              </li>

              <li>
                <span className="font-semibold">
                  c. Payment and Transaction Data
                </span>
                <ul className="ml-6 list-disc">
                  <li>
                    Payment Confirmation and Transaction IDs (via third-party
                    payment processors)
                  </li>
                  <li>Subscription Status</li>
                  <li>Purchase History</li>
                </ul>
              </li>

              <li>
                <span className="font-semibold">
                  d. Usage and Activity Data
                </span>
                <ul className="ml-6 list-disc">
                  <li>Courses Accessed and Completed</li>
                  <li>Quiz/Test Results and Scores</li>
                  <li>Session Attendance Records</li>
                  <li>Feedback and Reviews</li>
                </ul>
              </li>

              <li>
                <span className="font-semibold">
                  e. Device and Technical Data
                </span>
                <ul className="ml-6 list-disc">
                  <li>IP Address</li>
                  <li>Device ID and Type</li>
                  <li>Operating System and Version</li>
                  <li>App Version</li>
                  <li>Log Files and Usage Logs</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-semibold">3. How We Use Your Information</p>
            <p>We use your information to:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Register and manage your user account</li>
              <li>Deliver live and recorded course content</li>
              <li>Track your progress and performance</li>
              <li>Process payments and manage subscriptions</li>
              <li>Send notifications about classes, updates, and support</li>
              <li>Improve our courses and user experience</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-semibold">4. Sharing of Data</p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                With instructors and administrators for learning and evaluation
                purposes
              </li>
              <li>
                With third-party service providers (e.g., payment gateways,
                cloud storage) strictly for operational purposes
              </li>
              <li>When required by law enforcement or legal obligations</li>
            </ul>
            <p>
              All third-party partners are obligated to keep your data
              confidential and secure.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {" "}
            <p className="font-semibold">5. Data Storage and Security</p>
            <p>
              Your data is stored securely on encrypted servers. We implement
              industry-standard security measures, including:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>SSL encryption</li>
              <li>Secure user authentication</li>
              <li>Regular backups</li>
              <li>Restricted access controls</li>
            </ul>
            <p>
              Despite our efforts, no digital platform is 100% secure. We
              encourage users to maintain strong passwords and avoid sharing
              login credentials.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-semibold">6. Eligibility and User Privacy</p>
            <p>
              The App is open to anyone who wishes to learn, regardless of age
              or background. Users from anywhere in the world can access the
              courses. While the content is structured to suit learners with a
              basic foundation in education, there are no formal eligibility
              criteria or age restrictions for using the App.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {" "}
            <p className="font-semibold">7. Your Rights</p>
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Object to or restrict certain processing</li>
              <li>Withdraw consent for data processing</li>
              <li>Request data portability</li>
            </ul>
            <p>
              To exercise these rights, please contact us at{" "}
              <span className="text-blue-500 underline">
                hello@tronacademy.in
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-semibold">
              8. Cookies and Tracking Technologies
            </p>
            <p>We may use cookies or analytics tools to:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Enhance user experience</li>
              <li>Monitor app usage</li>
              <li>Improve app features</li>
            </ul>
            <p>
              You may manage cookie preferences through your device settings.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-semibold">9. Changes to this Policy</p>
            <p>
              We may update this policy from time to time. Significant changes
              will be communicated through the App or via email. Continued use
              of the App after changes constitutes your acceptance of the
              updated policy.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {" "}
            <p className="font-semibold">10. Contact Us</p>
            <p>
              If you have questions about this Privacy Policy or wish to make a
              request regarding your personal data, you can contact us at:
            </p>
            <p>Tron Academy</p>
            <p>
              Email:
              <span className="font-semibold">hello@tronacademy.in</span>
            </p>
            <p>
              Mobile:
              <span className="font-semibold">+91 8330077882</span>
            </p>
            <p>
              Address:
              <span className="font-semibold">
                Second Floor, City Tower, Friend Ship Nagar, Chavakkad, Kerala
                680506
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
