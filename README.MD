# TravelSwift

TravelSwift is powerful flight booking service, made as final exam for Singidunum Univercity, Serbia. Availible at this address: https://travelswift.ru. Videopresentation could be found here - https://travelswift/videopresentation.mov.

### Homepage

[![Homepage](https://travelswift.ru/images/index.png "Homepage")](https://travelswift.ru/images/index.png "Homepage")

Homepage presents the main features of the web site - searchfield, where you enter your flight details (e.g departure and arrival city, as well as the date), and popular destinations gallery, which is made using owlcarousel. Gallery elements display image of destination city, small description and integrated API of openweathermap.org, which shows current temperature in city. Date of flight chosen from gallery is 5 days from current date.

### Offers

[![Offers](https://travelswift.ru/images/offers.png "Offers")](https://travelswift.ru/images/offers.png "Offers")

Once selected destination from gallery or inputed details manually, user gets reditected to offers page, which randomly generates 5 airlines, price, departure and arrival time/date, as well as flight duration.

### Booking

[![Booking](https://travelswift.ru/images/booking.png "Booking")](https://travelswift.ru/images/booking.png "Booking")

Once user clicked "Buy tickets!" button on offers page, he gets redirected to booking page, which shows user plane model, where he can choose seats for the flight. 5-15 seats are randomly occupied automatically. When checked more than one seat, price increases according to number of checked seats. Then, user needs to input his email and proceed to payment.

### Ticket

[![Ticket](https://travelswift.ru/images/ticket.png "Ticket")](https://travelswift.ru/images/icket.png "Ticket")

After clicking buy button on booking page, user gets redirected to ticker page, where QR code is being generated based on flight's details using API of chart.googleapis.com. User also gets opportunity to go back to main page of service.

### About

[![About](https://travelswift.ru/images/about.png "About")](https://travelswift.ru/images/about.png "About")

About page is accessible from header and footer on any page. It shows a lot of info about service's mission, goals, etc.

### Partners

[![Partners](https://travelswift.ru/images/partners.png "Partners")](https://travelswift.ru/images/partners.png "Partners")

Partners page is also accessible from header and footer on any page. It shows logos, names and small promotion of all made-up airlines, used in main functionality of service.

### Contact

[![Contact](https://travelswift.ru/images/contact.png "Contact")](https://travelswift.ru/images/contact.png "Contact")

Last, but not least, contact page. As well as previous two, it is accessible from header and footer on any page. It shows location of our university and contains contact form, where user can describe his issue and get help from technical support.

## Technical information

Site is hosted on my private server running nginx as webserver and using let's encrypt as SSL certificate provider. All configurations can be shown by request.
