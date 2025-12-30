# fullstack_developer_capstone

## Architecture Overview

1. Add user management to the Django application.

   - Implement user management using the Django user authentication system and create a REACT frontend.

1. Implement backend services.

   - Create Node.js server to manage dealers and reviews using MongoDB and dockerize it.
   - Deploy sentiment analyzer on Code Engine.
   - Create Django models and views to manage car model and car make.
   - Create Django proxy services and views to integrate dealers and reviews together.

1. Add dynamic pages with Django templates.

   - Create a page that displays all the dealers.
   - Create a page that displays reviews for a selected dealer.
   - Create a page that lets the end user add a review for a selected dealer.

1. Implement CI/CD, and then run and test your application

   - Set up continuous integration and delivery for code linting.
   - Run your application on Cloud IDE.
   - Test the updated application locally.
   - Deploy the application on Kubernetes.

### Solution architecture

The solution will consist of multiple technologies

1. The user interacts with the "Dealerships Website", a Django website, through a web browser.

1. The Django application provides the following microservices for the end user:

   - get_cars/ - To get the list of cars from
   - get_dealers/ - To get the list of dealers
   - get_dealers/:state - To get dealers by state
   - dealer/:id - To get dealer by id
   - review/dealer/:id - To get reviews specific to a dealer
   - add_review/ - To post review about a dealer

1. The Django application uses SQLite database to store the Car Make and the Car Model data.

1. The "Dealerships and Reviews Service" is an Express Mongo service running in a Docker container. It provides the following services::

   - /fetchDealers - To fetch the dealers
   - /fetchDealer/:id - To fetch the dealer by id
   - fetchReviews - To fetch all the reviews
   - fetchReview/dealer/:id - To fetch reviews for a dealer by id
   - /insertReview - To insert a review

1. "Dealerships Website" interacts with the "Dealership and Reviews Service" through the "Django Proxy Service" contained within the Django Application.

1. The "Sentiment Analyzer Service" is deployed on IBM Cloud Code Engine, it provides the following service:

   - /analyze/:text - To analyze the sentiment of the text passed. It returns positive, negative or neutral.

1. The "Dealerships Website" consumes the "Sentiment Analyzer Service" to analyze the sentiments of the reviews through the Django Proxy contained within the Django application.

![alt text](./images/image.png)

## Deploy Sentiment Analysis on Code Engine as a Microservice

```bash
cd xrwvm-fullstack_developer_capstone/server/djangoapp/microservices

docker build . -t us.icr.io/${SN_ICR_NAMESPACE}/senti_analyzer

docker push us.icr.io/${SN_ICR_NAMESPACE}/senti_analyzer

ibmcloud ce application create --name sentianalyzer --image us.icr.io/${SN_ICR_NAMESPACE}/senti_analyzer --registry-secret icr-secret --port 5000
```
