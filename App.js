import React from "react";
import ReactDOM from "react-dom/client";
/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurentContainer
 *      - RestaurentCard
 *          - img
 *          - Name of the restaurent, Star Rating, Cuisine, delevery time etc
 * Footer
 *  - Copyright
 *  - Links
 *  - Contacts
 *
 */
const Header = () => {
  return (
    <div className="header">
      <div className="log-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&txt_keyword=All"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResaurantCard = (props) => {
  const { resData } = props;
  console.log(resData);
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData?.info;
  console.log(resData.info.name);
  console.log(resData.info.cuisines.join(", "));
  console.log(resData.info.avgRating);
  console.log(resData.info);
  console.log(resData.info);
  // or
  // const{resName, cuisine} = props;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

const restList = [
  {
    statusCode: 0,
    data: {
      statusMessage: "done successfully",
      pageOffset: {
        nextOffset: "CIk4EPQ1KIC446D+15OeTDDzDzgE",
        widgetOffset: {
          restaurantCountWidget: "",
          collectionV5RestaurantListWidget_Contextual: "13",
          inlineFacetFilter: "",
          collectionV5MastheadWidget: "",
        },
      },
      cards: [
        {
          card: {
            card: {
              "@type":
                "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              info: {
                id: "442043",
                name: "UBQ BY Barbeque Nation",
                cloudinaryImageId: "xtl2alesy7j6ape5xg3p",
                locality: "S S Omnia Mall",
                areaName: "Sector 86",
                costForTwo: "₹300 for two",
                cuisines: [
                  "North Indian",
                  "Barbecue",
                  "Biryani",
                  "Kebabs",
                  "Mughlai",
                  "Desserts",
                ],
                avgRating: 3.7,
                parentId: "10804",
                avgRatingString: "3.7",
                totalRatingsString: "500+",
                sla: {
                  deliveryTime: 39,
                  lastMileTravel: 4,
                  serviceability: "SERVICEABLE",
                  slaString: "35-40 mins",
                  lastMileTravelString: "4.0 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-06-05 23:30:00",
                  opened: true,
                },
                badges: {},
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {},
                    textExtendedBadges: {},
                    textBased: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "50% OFF",
                  subHeader: "UPTO ₹90",
                },
                orderabilityCommunication: {
                  title: {},
                  subTitle: {},
                  message: {},
                  customIcon: {},
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    maxDuration: "3000",
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "--",
                  },
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {},
              cta: {
                link: "swiggy://menu?restaurant_id=442043&source=collection&query=kebab",
                text: "RESTAURANT_MENU",
                type: "DEEPLINK",
              },
              widgetId: "collectionV5RestaurantListWidget_Contextual",
            },
            relevance: {
              type: "RELEVANCE_TYPE_ON_MENU_RETURN",
              sectionId: "MENU_RETURN_FOOD",
            },
          },
        },
        {
          card: {
            card: {
              "@type":
                "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              info: {
                id: "731865",
                name: "Lucknowee - Nawabi Rolls And Kebabs",
                cloudinaryImageId: "3b98224c6790e6655b2c46ed2026894b",
                locality: "Sector-85",
                areaName: "Iris Broadway",
                costForTwo: "₹600 for two",
                cuisines: [
                  "rolls",
                  "shawarma",
                  "Kebabs",
                  "Biryani",
                  "North Indian",
                  "Mughlai",
                  "Desserts",
                ],
                avgRating: 3.8,
                parentId: "513255",
                avgRatingString: "3.8",
                totalRatingsString: "50+",
                promoted: true,
                adTrackingId:
                  "cid=14049655~p=1~adgrpid=14049655#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=731865~eid=67114122-ba4c-4802-a202-5450f37e9583~srvts=1717609359918~collid=80451",
                sla: {
                  deliveryTime: 43,
                  lastMileTravel: 3.9,
                  serviceability: "SERVICEABLE",
                  slaString: "40-45 mins",
                  lastMileTravelString: "3.9 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-06-05 23:59:00",
                  opened: true,
                },
                badges: {},
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {},
                    textExtendedBadges: {},
                    textBased: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "₹125 OFF",
                  subHeader: "ABOVE ₹249",
                  discountTag: "FLAT DEAL",
                },
                orderabilityCommunication: {
                  title: {},
                  subTitle: {},
                  message: {},
                  customIcon: {},
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    maxDuration: "3000",
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "--",
                  },
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {},
              cta: {
                link: "swiggy://menu?restaurant_id=731865&source=collection&query=kebab",
                text: "RESTAURANT_MENU",
                type: "DEEPLINK",
              },
              widgetId: "collectionV5RestaurantListWidget_Contextual",
            },
            relevance: {
              type: "RELEVANCE_TYPE_ON_MENU_RETURN",
              sectionId: "MENU_RETURN_FOOD",
            },
          },
        },
        {
          card: {
            card: {
              "@type":
                "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              info: {
                id: "442042",
                name: "Barbeque Nation",
                cloudinaryImageId: "a6luwsenv8ne3gewn2wp",
                locality: "Sector 86",
                areaName: "Sector 86",
                costForTwo: "₹600 for two",
                cuisines: [
                  "North Indian",
                  "Barbecue",
                  "Biryani",
                  "Kebabs",
                  "Mughlai",
                  "Desserts",
                ],
                avgRating: 3.6,
                parentId: "2438",
                avgRatingString: "3.6",
                totalRatingsString: "500+",
                sla: {
                  deliveryTime: 45,
                  lastMileTravel: 4,
                  serviceability: "SERVICEABLE",
                  slaString: "45-50 mins",
                  lastMileTravelString: "4.0 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-06-05 23:30:00",
                  opened: true,
                },
                badges: {},
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    textBased: {},
                    imageBased: {},
                    textExtendedBadges: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "50% OFF",
                  subHeader: "UPTO ₹90",
                },
                orderabilityCommunication: {
                  title: {},
                  subTitle: {},
                  message: {},
                  customIcon: {},
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    maxDuration: "3000",
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "4.0",
                    ratingCount: "500+",
                  },
                  source: "GOOGLE",
                  sourceIconImageId:
                    "v1704440323/google_ratings/rating_google_tag",
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {},
              cta: {
                link: "swiggy://menu?restaurant_id=442042&source=collection&query=kebab",
                text: "RESTAURANT_MENU",
                type: "DEEPLINK",
              },
              widgetId: "collectionV5RestaurantListWidget_Contextual",
            },
            relevance: {
              type: "RELEVANCE_TYPE_ON_MENU_RETURN",
              sectionId: "MENU_RETURN_FOOD",
            },
          },
        },
        {
          card: {
            card: {
              "@type":
                "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              info: {
                id: "492967",
                name: "Annapurna Restaurant",
                cloudinaryImageId: "62bd15a02c2ad602845e7ae574c74693",
                locality: "Sikanderpur Badha",
                areaName: "Sector 83",
                costForTwo: "₹500 for two",
                cuisines: ["Chinese"],
                avgRating: 3.6,
                parentId: "2957",
                avgRatingString: "3.6",
                totalRatingsString: "100+",
                promoted: true,
                adTrackingId:
                  "cid=14143675~p=2~adgrpid=14143675#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=492967~eid=e8ec5992-b2a7-4ba4-a4f1-6ff993a64cf8~srvts=1717609359918~collid=80451",
                sla: {
                  deliveryTime: 44,
                  lastMileTravel: 3.5,
                  serviceability: "SERVICEABLE",
                  slaString: "40-45 mins",
                  lastMileTravelString: "3.5 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-06-05 23:59:00",
                  opened: true,
                },
                badges: {},
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    textBased: {},
                    imageBased: {},
                    textExtendedBadges: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "10% OFF",
                  subHeader: "UPTO ₹40",
                },
                orderabilityCommunication: {
                  title: {},
                  subTitle: {},
                  message: {},
                  customIcon: {},
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    maxDuration: "3000",
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "--",
                  },
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {},
              cta: {
                link: "swiggy://menu?restaurant_id=492967&source=collection&query=kebab",
                text: "RESTAURANT_MENU",
                type: "DEEPLINK",
              },
              widgetId: "collectionV5RestaurantListWidget_Contextual",
            },
            relevance: {
              type: "RELEVANCE_TYPE_ON_MENU_RETURN",
              sectionId: "MENU_RETURN_FOOD",
            },
          },
        },
        {
          card: {
            card: {
              "@type":
                "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              info: {
                id: "227684",
                name: "Mom's Kitchen",
                cloudinaryImageId: "xfk1hmdcfcoivp5bpa15",
                locality: "Vatika City",
                areaName: "Sector 84",
                costForTwo: "₹200 for two",
                cuisines: ["North Indian"],
                avgRating: 4.2,
                parentId: "2594",
                avgRatingString: "4.2",
                totalRatingsString: "1K+",
                sla: {
                  deliveryTime: 28,
                  lastMileTravel: 1.7,
                  serviceability: "SERVICEABLE",
                  slaString: "25-30 mins",
                  lastMileTravelString: "1.7 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-06-05 23:59:00",
                  opened: true,
                },
                badges: {},
                isOpen: true,
                aggregatedDiscountInfoV2: {},
                type: "F",
                badgesV2: {
                  entityBadges: {
                    textBased: {},
                    imageBased: {},
                    textExtendedBadges: {},
                  },
                },
                orderabilityCommunication: {
                  title: {},
                  subTitle: {},
                  message: {},
                  customIcon: {},
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    maxDuration: "3000",
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "--",
                  },
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {},
              cta: {
                link: "swiggy://menu?restaurant_id=227684&source=collection&query=kebab",
                text: "RESTAURANT_MENU",
                type: "DEEPLINK",
              },
              widgetId: "collectionV5RestaurantListWidget_Contextual",
            },
            relevance: {
              type: "RELEVANCE_TYPE_ON_MENU_RETURN",
              sectionId: "MENU_RETURN_FOOD",
            },
          },
        },
        {
          card: {
            card: {
              "@type":
                "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              info: {
                id: "113976",
                name: "37 Food Hub",
                cloudinaryImageId: "ngm9iwlkfdk5ciek7pvl",
                locality: "Sector 37",
                areaName: "Sector 37",
                costForTwo: "₹600 for two",
                cuisines: ["Chinese", "North Indian"],
                avgRating: 3.2,
                parentId: "23545",
                avgRatingString: "3.2",
                totalRatingsString: "100+",
                promoted: true,
                adTrackingId:
                  "cid=13562347~p=3~adgrpid=13562347#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=113976~eid=571d260d-c000-46e4-b5a9-284a6aa1aa46~srvts=1717609359918~collid=80451",
                sla: {
                  deliveryTime: 63,
                  lastMileTravel: 7.4,
                  serviceability: "SERVICEABLE",
                  slaString: "60-65 mins",
                  lastMileTravelString: "7.4 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-06-05 23:30:00",
                  opened: true,
                },
                badges: {},
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    textBased: {},
                    imageBased: {},
                    textExtendedBadges: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "10% OFF",
                  subHeader: "UPTO ₹100",
                },
                orderabilityCommunication: {
                  title: {},
                  subTitle: {},
                  message: {},
                  customIcon: {},
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    maxDuration: "3000",
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "5.0",
                    ratingCount: "5",
                  },
                  source: "GOOGLE",
                  sourceIconImageId:
                    "v1704440323/google_ratings/rating_google_tag",
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {},
              cta: {
                link: "swiggy://menu?restaurant_id=113976&source=collection&query=kebab",
                text: "RESTAURANT_MENU",
                type: "DEEPLINK",
              },
              widgetId: "collectionV5RestaurantListWidget_Contextual",
            },
            relevance: {
              type: "RELEVANCE_TYPE_ON_MENU_RETURN",
              sectionId: "MENU_RETURN_FOOD",
            },
          },
        },
        {
          card: {
            card: {
              "@type":
                "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              info: {
                id: "503888",
                name: "Thalairaj Biryani",
                cloudinaryImageId: "eaf673953af661d4e437eb00e76ead5d",
                locality: "Badha Sikanderpur",
                areaName: "IMT Manesar",
                costForTwo: "₹300 for two",
                cuisines: ["Biryani"],
                avgRating: 4.5,
                parentId: "433875",
                avgRatingString: "4.5",
                totalRatingsString: "1K+",
                sla: {
                  deliveryTime: 26,
                  lastMileTravel: 3.5,
                  serviceability: "SERVICEABLE",
                  slaString: "25-30 mins",
                  lastMileTravelString: "3.5 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-06-05 23:59:00",
                  opened: true,
                },
                badges: {},
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    textBased: {},
                    imageBased: {},
                    textExtendedBadges: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "50% OFF",
                  subHeader: "UPTO ₹100",
                },
                orderabilityCommunication: {
                  title: {},
                  subTitle: {},
                  message: {},
                  customIcon: {},
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    maxDuration: "3000",
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "--",
                  },
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {},
              cta: {
                link: "swiggy://menu?restaurant_id=503888&source=collection&query=kebab",
                text: "RESTAURANT_MENU",
                type: "DEEPLINK",
              },
              widgetId: "collectionV5RestaurantListWidget_Contextual",
            },
            relevance: {
              type: "RELEVANCE_TYPE_ON_MENU_RETURN",
              sectionId: "MENU_RETURN_FOOD",
            },
          },
        },
        {
          card: {
            card: {
              "@type":
                "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              info: {
                id: "803322",
                name: "Dhaba Hr 26 Tulip Chowk",
                cloudinaryImageId: "54d4572e5fd9324c7a54c01717697198",
                locality: " Tulip Chowk",
                areaName: "Sector 69, Gurugram",
                costForTwo: "₹300 for two",
                cuisines: ["North Indian", "Biryani", "Chinese", "Fast Food"],
                avgRating: 3.6,
                parentId: "479485",
                avgRatingString: "3.6",
                totalRatingsString: "10+",
                promoted: true,
                adTrackingId:
                  "cid=14122047~p=4~adgrpid=14122047#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=803322~eid=4c7c3914-ba3b-4021-a71f-0fab7bd283c5~srvts=1717609359918~collid=80451",
                sla: {
                  deliveryTime: 48,
                  lastMileTravel: 8,
                  serviceability: "SERVICEABLE",
                  slaString: "45-50 mins",
                  lastMileTravelString: "8.0 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-06-05 23:30:00",
                  opened: true,
                },
                badges: {},
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    textBased: {},
                    imageBased: {},
                    textExtendedBadges: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "20% OFF",
                  subHeader: "UPTO ₹120",
                },
                orderabilityCommunication: {
                  title: {},
                  subTitle: {},
                  message: {},
                  customIcon: {},
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    maxDuration: "3000",
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                isNewlyOnboarded: true,
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "--",
                  },
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {},
              cta: {
                link: "swiggy://menu?restaurant_id=803322&source=collection&query=kebab",
                text: "RESTAURANT_MENU",
                type: "DEEPLINK",
              },
              widgetId: "collectionV5RestaurantListWidget_Contextual",
            },
            relevance: {
              type: "RELEVANCE_TYPE_ON_MENU_RETURN",
              sectionId: "MENU_RETURN_FOOD",
            },
          },
        },
        {
          card: {
            card: {
              "@type":
                "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              info: {
                id: "667048",
                name: "Chicken Mahal",
                cloudinaryImageId: "778ee0612bfe407e25a0a1acc0a34284",
                locality: "SS Omnia Mall",
                areaName: "Sector 85",
                costForTwo: "₹300 for two",
                cuisines: [
                  "North Indian",
                  "Chinese",
                  "Mughlai",
                  "Momos",
                  "Biryani",
                  "Barbecue",
                  "Thalis",
                  "Grill",
                  "Pan-Asian",
                  "Asian",
                  "Nepalese",
                  "Japanese",
                  "Thai",
                  "Beverages",
                  "Desserts",
                ],
                avgRating: 4.1,
                parentId: "10634",
                avgRatingString: "4.1",
                totalRatingsString: "100+",
                sla: {
                  deliveryTime: 35,
                  lastMileTravel: 3.5,
                  serviceability: "SERVICEABLE",
                  slaString: "35-40 mins",
                  lastMileTravelString: "3.5 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-06-06 01:00:00",
                  opened: true,
                },
                badges: {},
                select: true,
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    textExtendedBadges: {},
                    textBased: {},
                    imageBased: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "60% OFF",
                  subHeader: "UPTO ₹120",
                },
                orderabilityCommunication: {
                  title: {},
                  subTitle: {},
                  message: {},
                  customIcon: {},
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    maxDuration: "3000",
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "--",
                  },
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {},
              cta: {
                link: "swiggy://menu?restaurant_id=667048&source=collection&query=kebab",
                text: "RESTAURANT_MENU",
                type: "DEEPLINK",
              },
              widgetId: "collectionV5RestaurantListWidget_Contextual",
            },
            relevance: {
              type: "RELEVANCE_TYPE_ON_MENU_RETURN",
              sectionId: "MENU_RETURN_FOOD",
            },
          },
        },
        {
          card: {
            card: {
              "@type":
                "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              info: {
                id: "207788",
                name: "Faasos - Wraps, Rolls & Shawarma",
                cloudinaryImageId: "af33b81798b11deba338e94b7585d348",
                locality: "Huda Market",
                areaName: "Manesar",
                costForTwo: "₹500 for two",
                cuisines: [
                  "Kebabs",
                  "Fast Food",
                  "Snacks",
                  "American",
                  "Healthy Food",
                  "Desserts",
                  "Beverages",
                ],
                avgRating: 4.2,
                parentId: "21809",
                avgRatingString: "4.2",
                totalRatingsString: "1K+",
                promoted: true,
                adTrackingId:
                  "cid=14150928~p=5~adgrpid=14150928#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=207788~eid=80672765-357e-4d20-b005-72eae02d4632~srvts=1717609359918~collid=80451",
                sla: {
                  deliveryTime: 49,
                  lastMileTravel: 8.8,
                  serviceability: "SERVICEABLE",
                  slaString: "45-50 mins",
                  lastMileTravelString: "8.8 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-06-05 23:59:00",
                  opened: true,
                },
                badges: {
                  textExtendedBadges: [
                    {
                      iconId: "guiltfree/GF_Logo_android_3x",
                      shortDescription: "options available",
                      fontColor: "#7E808C",
                    },
                  ],
                },
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    textBased: {},
                    imageBased: {},
                    textExtendedBadges: {
                      badgeObject: [
                        {
                          attributes: {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            description: "",
                            shortDescription: "options available",
                            fontColor: "#7E808C",
                          },
                        },
                      ],
                    },
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "₹125 OFF",
                  subHeader: "ABOVE ₹199",
                  discountTag: "FLAT DEAL",
                },
                orderabilityCommunication: {
                  title: {},
                  subTitle: {},
                  message: {},
                  customIcon: {},
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    maxDuration: "3000",
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "--",
                  },
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {},
              cta: {
                link: "swiggy://menu?restaurant_id=207788&source=collection&query=kebab",
                text: "RESTAURANT_MENU",
                type: "DEEPLINK",
              },
              widgetId: "collectionV5RestaurantListWidget_Contextual",
            },
            relevance: {
              type: "RELEVANCE_TYPE_ON_MENU_RETURN",
              sectionId: "MENU_RETURN_FOOD",
            },
          },
        },
        {
          card: {
            card: {
              "@type":
                "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              info: {
                id: "653476",
                name: "Andhra Kodi Pulao",
                cloudinaryImageId: "3f8f561147d0b291bdad41d21b3d5976",
                locality: "Vatika Market Place -1",
                areaName: "Sector 83",
                costForTwo: "₹350 for two",
                cuisines: [
                  "Biryani",
                  "North Indian",
                  "Kebabs",
                  "Andhra",
                  "Mughlai",
                ],
                avgRating: 4.1,
                parentId: "11064",
                avgRatingString: "4.1",
                totalRatingsString: "100+",
                sla: {
                  deliveryTime: 37,
                  lastMileTravel: 2.5,
                  serviceability: "SERVICEABLE",
                  slaString: "35-40 mins",
                  lastMileTravelString: "2.5 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-06-05 23:59:00",
                  opened: true,
                },
                badges: {},
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    textBased: {},
                    imageBased: {},
                    textExtendedBadges: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "15% OFF",
                  subHeader: "ABOVE ₹1000",
                  discountTag: "FLAT DEAL",
                },
                orderabilityCommunication: {
                  title: {},
                  subTitle: {},
                  message: {},
                  customIcon: {},
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    maxDuration: "3000",
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "--",
                  },
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {},
              cta: {
                link: "swiggy://menu?restaurant_id=653476&source=collection&query=kebab",
                text: "RESTAURANT_MENU",
                type: "DEEPLINK",
              },
              widgetId: "collectionV5RestaurantListWidget_Contextual",
            },
            relevance: {
              type: "RELEVANCE_TYPE_ON_MENU_RETURN",
              sectionId: "MENU_RETURN_FOOD",
            },
          },
        },
      ],
      firstOffsetRequest: true,
      nextFetch: 3,
    },
    tid: "5b353aed-c907-46b7-8ee3-0e69de116639",
    sid: "e8m7e0ca-9888-4c31-81bb-8b84f9ea87cc",
    deviceId: "376c3b0c-a1ad-2fb9-e078-f55cb60306c1",
    csrfToken: "198X8Lm4SIdJ-msLHfynC-oTx0czbva2qxTw_nHM",
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* ResaurantCard */}
        {console.log(restList)}
        {/* <ResaurantCard resData={restList[0].data.cards[0].card.card}/>
        <ResaurantCard resData={restList[0].data.cards[1].card.card}/>
        <ResaurantCard resData={restList[0].data.cards[2].card.card}/>
        <ResaurantCard resData={restList[0].data.cards[3].card.card}/>
        <ResaurantCard resData={restList[0].data.cards[4].card.card}/>
        <ResaurantCard resData={restList[0].data.cards[5].card.card}/>
        <ResaurantCard resData={restList[0].data.cards[6].card.card}/> */}
        {restList && restList.length > 0 ? (
          restList.map((restaurant, index) =>
            restaurant.data.cards.map((card, cardIndex) => (
              
              <ResaurantCard
                key={`${index}-${cardIndex}`}
                resData={card.card.card}
              />
              
            ))
          )
        ) : (
          <p>No restaurants available</p>
        )}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* Body */}
      <Body />
      {/* Footer */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// pros are just argument
root.render(<AppLayout />);
