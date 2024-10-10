const Footer = () => {
  return (
    <>
      <footer class="bg-gray-100 p-8 text-sm">
        <div class="max-w-screen-xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
          <div>
            <h3 class="font-bold text-gray-900 mb-3">Support</h3>
            <ul class="space-y-2">
              <li>
                <a href="#" class="text-gray-600 hover:underline">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-600 hover:underline">
                  Safety information
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-600 hover:underline">
                  Cancellation options
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-600 hover:underline">
                  Our COVID-19 Response
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="font-bold text-gray-900 mb-3">Community</h3>
            <ul class="space-y-2">
              <li>
                <a href="#" class="text-gray-600 hover:underline">
                  Airbnb.org: disaster relief housing
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-600 hover:underline">
                  Support Afghan refugees
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-600 hover:underline">
                  Combating discrimination
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="font-bold text-gray-900 mb-3">Hosting</h3>
            <ul class="space-y-2">
              <li>
                <a href="#" class="text-gray-600 hover:underline">
                  Try hosting
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-600 hover:underline">
                  AirCover for Hosts
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-600 hover:underline">
                  Explore hosting resources
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-600 hover:underline">
                  Visit our community forum
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="font-bold text-gray-900 mb-3">About</h3>
            <ul class="space-y-2">
              <li>
                <a href="#" class="text-gray-600 hover:underline">
                  Newsroom
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-600 hover:underline">
                  Learn about new features
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-600 hover:underline">
                  Letter from our founders
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-600 hover:underline">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="flex justify-between items-center border-t border-gray-200 pt-6">
          <p class="text-gray-600">
            © 2024 Airbnb, Inc. · Privacy · Terms · Sitemap
          </p>
          <div class="flex space-x-4 items-center">
            <a href="#" class="text-gray-600 hover:underline">
              English (IN)
            </a>
            <a href="#" class="text-gray-600 hover:underline">
              ₹ INR
            </a>

            <a href="#" class="text-gray-600 hover:text-gray-900">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.1-.9-2-2-2s-2 .9-2 2v5.5h-3v-10h3v1.5c.89-.64 1.98-1.5 3.25-1.5 2.62 0 4.75 2.13 4.75 4.75v5.25z" />
              </svg>
            </a>
            <a href="#" class="text-gray-600 hover:text-gray-900">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.83.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .386.045.762.127 1.124-4.09-.205-7.719-2.164-10.141-5.144-.423.725-.666 1.562-.666 2.457 0 1.695.863 3.191 2.175 4.067-.802-.026-1.558-.246-2.215-.616v.062c0 2.368 1.685 4.345 3.918 4.792-.41.111-.843.171-1.287.171-.314 0-.621-.03-.92-.086.622 1.941 2.422 3.355 4.556 3.395-1.67 1.309-3.778 2.089-6.065 2.089-.394 0-.781-.023-1.165-.068 2.163 1.387 4.733 2.197 7.496 2.197 8.994 0 13.911-7.457 13.911-13.911 0-.211 0-.42-.015-.63.955-.689 1.785-1.548 2.443-2.528z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
