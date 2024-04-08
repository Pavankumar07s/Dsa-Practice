#include <iostream>
#include <stack>
#include <string> // Added for string type

using namespace std;

bool findRedundantBrackets() {
    stack<char> st;
    string s = "(a+b(a+b))"; // Added semicolon after string declaration
    for (int i = 0; i < s.length(); i++) {
        char ch = s[i];

        if (ch == '(' || ch == '+' || ch == '-' || ch == '*' || ch == '/') {
            st.push(ch);
        } else {
            // ch ya toh ')' hai or lowercase letter

            if (ch == ')') {
                bool isRedundant = true;

                while (st.top() != '(') {
                    char top = st.top();
                    if (top == '+' || top == '-' || top == '*' || top == '/') {
                        isRedundant = false;
                    }
                    st.pop();
                }

                if (isRedundant == true)
                    return true;
                st.pop();
            }
        }
    }
    return false;
}

int main() {
    cout << findRedundantBrackets(); // Added missing function call within main function
    
}
