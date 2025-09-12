export default function Footer({ mostPopularCategories, customerServices }) {
  return (
    <footer className="bg-blue-600 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-xl font-bold mb-6">MegaMart</h3>
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Contact Us</h4>
            <p className="flex items-center space-x-2 mb-1">
              <span>📱</span>
              <a href="https://wa.me/12029182132" className="underline">
                WhatsApp +1 202-918-2132
              </a>
            </p>
            <p className="flex items-center space-x-2">
              <span>📞</span>
              <a href="tel:+12029182132" className="underline">
                Call Us +1 202-918-2132
              </a>
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Download App</h4>
            <div className="flex space-x-4">
              <a href="#" aria-label="App Store">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg"
                  alt="App Store"
                  className="h-10"
                />
              </a>
              <a href="#" aria-label="Google Play Store">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Get_it_on_Google_play.svg"
                  alt="Google Play"
                  className="h-10"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Middle Section: Popular Categories */}
        <div>
          <h4 className="font-semibold mb-4 border-b border-white pb-2">
            Most Popular Categories
          </h4>
          <ul className="space-y-2">
            {mostPopularCategories.map((item) => (
              <li key={item} className="text-sm cursor-pointer hover:underline">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section: Customer Services */}
        <div>
          <h4 className="font-semibold mb-4 border-b pb-2">
            Customer Services
          </h4>
          <ul className="space-y-2">
            {customerServices.map((item) => (
              <li key={item} className="text-sm cursor-pointer hover:underline">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-8 text-center text-sm opacity-75">
        © 2022 All rights reserved. Reliance Retail Ltd.
      </div>
    </footer>
  );
}
