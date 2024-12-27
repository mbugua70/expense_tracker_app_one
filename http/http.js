import axios from "axios";


let BACKEND_URL = "https://react-native-expense-app-744f1-default-rtdb.firebaseio.com"


export async function createExpense(expenseData){
  const response = await axios.post(`${BACKEND_URL}/expenses.json`, expenseData);
  const id = response.data.name
  return id;
}


export async function fetchExpenses(){
   const response = await axios.get(`${BACKEND_URL}/expenses.json`)

   const expenses = [];

   for(const key in response.data){

     const expensesObj = {
        id: key,
        amount: response.data[key].amount,
        title: response.data[key].title,
        description: response.data[key].description,
        date: new Date(response.data[key].date),
        category: response.data[key].category,
     }

     expenses.push(expensesObj);
   }


   return expenses;
 }


 export async function updateExpense  (expenseId, expenseData ){
  console.log(expenseId);

  // by returning a promise will help us to take advantage of the loading state
  const response = await axios.patch(`${BACKEND_URL}/expenses/${expenseId}.json`, expenseData)

  // const id = response.data.name
  return response.status;
 }

 export function deleteExpenseId(id){
  return axios.delete(`${BACKEND_URL}/expenses/${id}.json`)
 }