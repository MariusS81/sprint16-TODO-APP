# sprint16-TODO-APP

The app should fulfill the following stories:
1️⃣ View all todos in two separated list active todos and completed todos [ ⭐️ ]
Use a state to store your todos. Initialize it from TODOS_MOCK array, found in App.js file. This array will help you to understand how your state should look like.
Display the todos from your state with <TodoItem /> component.
Initially, the information displayed by <TodoItem /> component is static.

Make this component reusable and add the changes to receive the displayed data dynamically through props.

We added one prop for you - completed, which is responsible for styling the completed / active items. You don't have to worry about styling. Just make sure you pass the proper values.

Display todos in two separate lists, depending on completed value.

HINT ! use array methods: map() and filter().

By using the JavaScript method, map(), you will be able to create a new array of items by mapping over the todo items from state.

By using the JavaScript method, filter(), you will be able to filter your array before mapping.

2️⃣ Add todos [⭐️]
Add the functionality into a form.

update the form by setting the state.
Handle the submit and add the new item to the todo list.
2.1 [ ⭐️ ] Your form will be displayed inside of modal component. You can import this component from src/components/modal/Modal.jsx

Clicking on ADD + button will open the modal.
Don't forget to add a state to control your modal (open / close)

3️⃣ Mark todo as complete / done [ ⭐️ ⭐️ ]
By checking / unchecking the checkbox, todo item will update it's status and move to another list.
4️⃣ Delete any task [⭐️]
Clicking on delete icon will remove the coresponding item.
5️⃣ Editing any task [⭐️ ⭐️ ⭐️]
Clicking on edit icon will open the modal and prefill the form fields with corespending data.
User will be able to edit these fields and submit the form.
Todo Item will be updated.
