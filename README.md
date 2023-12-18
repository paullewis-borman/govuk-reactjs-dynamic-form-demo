# GOVUK ReactJS Dynamic Form Generator Demo

This is a ReactJS application designed to demonstrate how we can dynamically build a GOVUK style form in ReactJS using a form definition provided in json format. The form components are based on those from the existing govuk-react repository, which in turn are based on this standard GDS design system [here](https://design-system.service.gov.uk/)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm installed on your machine. If not, you can download and install them from [here](https://nodejs.org/en/download/).

### Installing

Clone the repository to your local machine.

git clone https://github.com/paullewis-borman/govuk-reactjs-dynamic-form-demo

Navigate into the project directory.

`cd ./govuk-reactjs-dynamic-form-demo`

Install the project dependencies.

`npm install`

Install the govuk-react library.

`npm install govuk-react`

Install React and ReactDOM.

`npm install react react-dom`

### Running the Application

To start the application, run:

`npm start`

The application will start and can be accessed at `http://localhost:3000`.
NB: Your local machine might require a different port number if you are already using this for another app. Node should inform you of this when you run the above command.

## How to define your Form

The form structure is defined in the `form-structure.js` file located in the ./src directory. This file contains the JSON that is used to dynamically generate the form. You can edit the json in this file experiment with generation of different form layouts, but you can only choose component types (form field types) from the subset of  reactjs GDS form components that this demo currently implements, they are:

Input, TextArea, Select, Button, GridRow, GridCol, H1, Paragraph, Radio, Checkbox, Fieldset

There are are bunch of example layouts in the ./src folder with names like form-strucutre-xxxxxx.js. Just copy the content of these over the existing form-structure.js and you can toggle between form layouts. These example also show you how to use different component types including how to wrap Checkboxes within a Fieldset so you can group choices together.

It would be relatively straightforward to add more, see below to understand how the form rendering works to understand how this can be done.

In a real-world application, we would not use JSON from a static JS file. Instead, the idea is we would retrieve the JSON form structure from an API call that provides the form layout for whatever request form we want. This functionality is not implemented in this demo.

I have provided an example form-structure.js with this repo that should work out of the box. This should be self-explanatory. I suggest you take a backup of this and they play around with your own configurations to experiment. Good luck!

## Output json
Each form autoatically gets a GDS form header and footer and your "json form" gets rendered between these. When your form is submitted (button click) it will produce a json output of the field names and values entered by the user. You can see this if you open the console in your browser developer tools.


## How Dynamic form generation works

If you look in Apps.js you will see that there is a custom component called `DynamicFormContent.js`. You can find this file in the ./components folder. This component reads the json in the ./form-structure.js file that describes how the form should be laid out. It is a very basic implementation at the moment

## Built With

* [ReactJS](https://reactjs.org/) - The web framework used
* [govuk-react](https://github.com/govuk-react/govuk-react) - GOV.UK components for React

## Authors

* **Paul Lewis-Borman** - *Initial work* - [YourGithubUsername](https://github.com/paullewis-borman)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thanks to all those that implemented the govuk-reactjs repo, what a fantastic resource
* Inspiration from Peter Thompson
