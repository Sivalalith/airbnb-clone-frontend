const DropdownLocation = () => {
  return (
    <div className="absolute left-0 w-80 my-6 flex flex-col bg-white shadow-lg rounded-3xl z-10 max-h-80 max-w-96 overflow-y-auto scrollbar">
      <span className="px-4 py-2 text-sm font-light">Recent Searches</span>
      <div>
        <a href="/" className="flex items-center px-4 py-2">
          <img
            className="w-12"
            src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-2/original/7167e066-5543-4a7f-9fcb-50b2e477ccd6.png"
          />
          <span className="h-full px-8 py-2 text-sm font-medium">
            Mountain View
          </span>
        </a>
      </div>
      <span className="px-4 py-2 text-sm font-light">
        Suggested destinations
      </span>
      <div className="w-full">
        <a href="/" className="flex items-center px-4 py-2">
          <img
            className="w-12"
            src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/06f0f050-c167-4d1e-89e1-2775be94f82a.png"
          />
          <div className="flex flex-col text-left">
            <span className="mx-6 text-sm font-medium">North Goa, Goa</span>
            <span className="mx-6 text-sm font-light">
              Popular beach destination
            </span>
          </div>
        </a>
      </div>
      <div>
        <a href="/" className="flex items-center px-4 py-2">
          <img
            className="w-12"
            src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/ebb968b2-3fb6-45d3-b675-7765e487f7b9.png"
          />
          <div className="flex flex-col text-left">
            <span className="mx-6 text-sm font-medium">
              Puducherry, Puducherry
            </span>
            <span className="mx-6 text-sm font-light">
              Popular beach destination
            </span>
          </div>
        </a>
      </div>
      <div>
        <a href="/" className="flex items-center px-4 py-2">
          <img
            className="w-12"
            src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-2/original/7167e066-5543-4a7f-9fcb-50b2e477ccd6.png"
          />
          <div className="flex flex-col text-left">
            <span className="mx-6 text-sm font-medium">Calangute, Goa</span>
            <span className="mx-6 text-sm font-light">
              A short distance from South Goa search
            </span>
          </div>
        </a>
      </div>
      <div>
        <a href="/" className="flex items-center px-4 py-2">
          <img
            className="w-12"
            src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/06f0f050-c167-4d1e-89e1-2775be94f82a.png"
          />
          <div className="flex flex-col text-left">
            <span className="mx-6 text-sm font-medium">
              Tirupati, Andhra Pradesh
            </span>
            <span className="mx-6 text-sm font-light">
              Popular with travellers near you
            </span>
          </div>
        </a>
      </div>
      <div>
        <a href="/" className="flex items-center px-4 py-2">
          <img
            className="w-12"
            src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-2/original/7167e066-5543-4a7f-9fcb-50b2e477ccd6.png"
          />
          <div className="flex flex-col text-left">
            <span className="mx-6 text-sm font-medium">New Delhi, Delhi</span>
            <span className="mx-6 text-sm font-light">
              For sights like India Gate
            </span>
          </div>
        </a>
      </div>
      <div>
        <a href="/" className="flex items-center px-4 py-2">
          <img
            className="w-12"
            src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-2/original/7167e066-5543-4a7f-9fcb-50b2e477ccd6.png"
          />
          <div className="flex flex-col text-left">
            <span className="mx-6 text-sm font-medium">Ooty, Tamil Nadu</span>
            <span className="mx-6 text-sm font-light">For nature lovers</span>
          </div>
        </a>
      </div>
      <div>
        <a href="/" className="flex items-center px-4 py-2">
          <img
            className="w-12"
            src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/06f0f050-c167-4d1e-89e1-2775be94f82a.png"
          />
          <div className="flex flex-col text-left">
            <span className="mx-6 text-sm font-medium">
              Lonavala, Maharashtra
            </span>
            <span className="mx-6 text-sm font-light">
              For sights like Karla Caves
            </span>
          </div>
        </a>
      </div>
      <div>
        <a href="/" className="flex items-center px-4 py-2">
          <img
            className="w-12"
            src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-2/original/7167e066-5543-4a7f-9fcb-50b2e477ccd6.png"
          />
          <div className="flex flex-col text-left">
            <span className="mx-6 text-sm font-medium">
              Manali, Himachal Pradesh
            </span>
            <span className="mx-6 text-sm font-light">
              Great for winter getaways
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default DropdownLocation;
