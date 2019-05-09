# Intermediate vue Questionnaire

## General project
```
This folder holds a general setup for vue.js with the vue router vuex and axios.
Ready to deploy a general longer questionnaires with switching components.
```

### To add on to it
```
The main form is just a dummy template of inputs and radio buttons.
These can then be adapted to the type of questionnaire needed for the project.
Axios is not yet implemented and will need to be added to work with the back end.
This will be done when we know what questions will be in the form and what will need 
to be sent to the database.
Progress Bar should be added also to help identify where the user is on the questionnaire.
Creation of a previous button on the components could be a nice touch.
```

### General structure
```
```
#### main.js :
```
General basic setup that is initialised with vue cli.
```

#### router.js :
```
Main route setup to go to the homepage and the questionnaire page.
```

#### store.js :
```
The store in vuex holds the state of the component that is first loaded on the questionnaire page,
which is the first part of the form (FormFirstPart.vue) and then when click on the next button,
an action is called to change to the next component (FormSecondPart.vue) etc
until we get to the Thank you page.
There is an action for each next button to go to the correct component.
```

#### App.vue :
```
Currently loads the main router view, which will be the homepage. There is still the navbar 
left in place for easy acces to both pages during development.
```

#### Home.vue :
```
This view is for giving a message to the users and explaning what the current questionnaire
will be about and then has a link to acces the questionnaire.
```

#### Questionnaire.vue :
```
This view is to load the questionnaire. It will load the first part of the form and will load the 
correct component depending on the user's progress. 
The components it can load are:
FormFirstPart.vue, FormSecondPart.vue, FormThirdPart.vue, FormFourthPart.vue and the ThankYou.vue
```

#### FormFirstPart.vue, FormSecondPart.vue, FormThirdPart.vue, FormFourthPart.vue :
```
Components for the questionnaire view that contains different parts of the form.
Composed of basic inputs, radio buttons and textareas.
To be adapted depending on the questionnaire
```

#### ThankYou.vue :
```
The component to say thank you to the user for completing the form.