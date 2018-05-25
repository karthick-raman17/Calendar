package com.calendar.application;

import java.io.BufferedReader;

import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;
import java.net.URLConnection;
import javax.jdo.PersistenceManager;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.jdoclass.PMF;
import com.sun.org.glassfish.gmbal.ParameterNames;
import com.calendar.model.ContactJdo;
import com.calendar.model.GooglePojo;

@SuppressWarnings("unused")
@Controller
public class CalendarController {
	
	
	@RequestMapping(value="/signup_page")
	public String signup() {
		return "signup"; 
	}
	

	@RequestMapping(value="/calendar")
	public String homepage() {
		return "calendar";
	}
	
	
	
	@RequestMapping(value="/jsontest",  method = { RequestMethod.GET })
	public void jsonTest(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		   response.setContentType("application/json");
		   response.setCharacterEncoding("utf-8");
		   
		   
		   PrintWriter out = response.getWriter();

		String eventTest = "{\"title\":\"karthick event\",\"start\":\"2018-05-12T10:30:00\",\"end\":\"2018-05-12T12:00:00\"}";
		 JsonObject jsonobject = (JsonObject)new JsonParser().parse(eventTest);
//         String jsontest = jsonobject.get("title").getAsString();
		 System.out.println("request came");
		
	out.print(jsonobject.toString());
	}
	
	@RequestMapping(value="/oauth2callback",  method = { RequestMethod.GET })
	protected ModelAndView googleOAuth(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        
        System.out.println("entering doGet");
        try {	
            String code = request.getParameter("code");
//            http://1-dot-live-calendar-application.appspot.com/oauth2callback
            String urlParameters = "code="
                    + code
                    + "&client_id=1010962435834-4qg0910ud5r2hfbhqr9g3005ese3qcbc.apps.googleusercontent.com"
                    + "&client_secret=0VfFS4C1wj-2xI3x5IJ-Xzf8"
                    + "&redirect_uri=http://1-dot-live-calendar-application.appspot.com/oauth2callback"
                    + "&grant_type=authorization_code";
           
            URL url = new URL("https://accounts.google.com/o/oauth2/token");
            URLConnection urlConn = url.openConnection();
            urlConn.setDoOutput(true);
            OutputStreamWriter writer = new OutputStreamWriter(urlConn.getOutputStream());
            writer.write(urlParameters);
            writer.flush();
            
          
            String line, outputString = "";
            BufferedReader reader = new BufferedReader(new InputStreamReader(urlConn.getInputStream()));
            while ((line = reader.readLine()) != null) {
                outputString += line;
            }
            System.out.println(outputString);
            
            //Access Token 
            JsonObject json = (JsonObject)new JsonParser().parse(outputString);
            String access_token = json.get("access_token").getAsString();
            System.out.println("JSON "+json);

        
            url = new URL("https://www.googleapis.com/oauth2/v1/userinfo?access_token="+ access_token);
            urlConn = url.openConnection();
            outputString = "";
            reader = new BufferedReader(new InputStreamReader(urlConn.getInputStream()));
            while ((line = reader.readLine()) != null) {
                outputString += line;
            }
            System.out.println(outputString);
            
         
            GooglePojo data = new Gson().fromJson(outputString, GooglePojo.class);
           
            ContactJdo userData = new ContactJdo();
            userData.setId(data.getId());
            userData.setLoginId(data.getEmail());
            userData.setFirstName(data.getGiven_name());
            userData.setLastName(data.getFamily_name());
            userData.setPicture(data.getPicture());
            userData.setVerified_email(data.isVerified_email());
            userData.setLoginType("google");
         
            PersistenceManager pm = PMF.get().getPersistenceManager();
         
            try {
                pm.makePersistent(userData);
            } finally {
                pm.close();
            }
            
            writer.close();
            reader.close();
            
        } catch (MalformedURLException e) {
            System.out.println( e);
        } catch (ProtocolException e) {
            System.out.println( e);
        } catch (IOException e) {
            System.out.println( e);
        }
      return new ModelAndView("redirect:calendar");
        
    }
	
	

}
