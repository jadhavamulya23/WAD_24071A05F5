package com.calorieapp;

import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;
import jakarta.servlet.*;
import java.io.*;

@WebServlet("/calories")
public class CalorieServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        out.println("<html><body>");
        out.println("<h2>Calorie Tracker</h2>");
        out.println("<form method='post' action='calories'>");
        out.println("Food Item: <input type='text' name='food'><br><br>");
        out.println("Calories: <input type='number' name='calories'><br><br>");
        out.println("<input type='submit' value='Add'>");
        out.println("</form>");
        out.println("</body></html>");
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String food = request.getParameter("food");
        String calories = request.getParameter("calories");

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        out.println("<html><body>");
        out.println("<h2>Calorie Entry Recorded</h2>");
        out.println("<p>Food: " + food + "</p>");
        out.println("<p>Calories: " + calories + "</p>");
        out.println("<a href='calories'>Go Back</a>");
        out.println("</body></html>");
    }
}
