package com.example.DM.controller;

import antlr.StringUtils;
import com.example.DM.bean.Xmldata;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;

import javax.json.Json;
import javax.json.JsonObject;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.xpath.XPathConstants;
import javax.xml.xpath.XPathExpression;
import javax.xml.xpath.XPathFactory;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.io.StringReader;
import java.net.URISyntaxException;
import java.util.HashMap;
import java.util.List;
import java.util.Scanner;

import static com.sun.xml.bind.WhiteSpaceProcessor.replace;

@Path("xmldata")
public class XmldataController {

    @POST
    @Path("/processing")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Response xmlresponse(JsonObject data) throws URISyntaxException {
        System.out.println("controller file");
//        System.out.println(data.get("xml_txt"));
//        System.out.println(data.get("xml_"));
        String xml_data = String.valueOf(data.get("xml_txt"));
        System.out.println(xml_data);
        HashMap<String, Boolean> uniqueElements = new HashMap<String, Boolean>();
        xml_data = xml_data.replaceAll("\\\\n", "");
        xml_data = xml_data.replaceAll("\\\\", "");

        try {
            File myObj = new File("file:///home/souvik/Desktop/apache-tomcat-9.0.39/bin/input.txt");
            Scanner myReader = new Scanner(myObj);
            while (myReader.hasNextLine()) {
                String data1 = myReader.nextLine();
                System.out.println(data1);
            }
            myReader.close();
        } catch (FileNotFoundException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
        System.out.println(xml_data);
        try {
//          InputSource is = new InputSource(new StringReader(xml_data));
//            try(PrintWriter out = new PrintWriter("input.txt")) {
//                out.println(xml_data);
//         }
            final Document doc = DocumentBuilderFactory.newInstance().newDocumentBuilder().parse("file:///home/souvik/Desktop/apache-tomcat-9.0.39/bin/input.txt");
            final XPathExpression xpath = XPathFactory.newInstance().newXPath().compile("//*[count(./*) = 0]");
            final NodeList nodeList = (NodeList) xpath.evaluate(doc, XPathConstants.NODESET);
            for(int i = 0; i < nodeList.getLength(); i++) {
                final Element el = (Element) nodeList.item(i);
//            System.out.println(el.getNodeName());
                uniqueElements.put(el.getNodeName(), true);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        System.out.println(uniqueElements);
        //if(courseslist.size()!=0)
//        {
           return Response.ok().entity(data).build();
//        }
        //else{
          //  return Response.status(203).build();
        //}
    }





    @POST
    @Path("/createspec")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Response createSpec(JsonObject data) throws URISyntaxException {
        System.out.println("controller file");
//        System.out.println(data.get("xml_txt"));
//        System.out.println(data.get("xml_"));
        String xml_data = String.valueOf(data.get("xml_txt"));
        System.out.println(xml_data);
        HashMap<String, Boolean> uniqueElements = new HashMap<String, Boolean>();
        xml_data = xml_data.replaceAll("\\\\n", "");
        xml_data = xml_data.replaceAll("\\\\", "");

        try {
            File myObj = new File("file:///home/souvik/Desktop/apache-tomcat-9.0.39/bin/input.txt");
            Scanner myReader = new Scanner(myObj);
            while (myReader.hasNextLine()) {
                String data1 = myReader.nextLine();
                System.out.println(data1);
            }
            myReader.close();
        } catch (FileNotFoundException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
        System.out.println(xml_data);
        try {
//          InputSource is = new InputSource(new StringReader(xml_data));
//            try(PrintWriter out = new PrintWriter("input.txt")) {
//                out.println(xml_data);
//         }
            final Document doc = DocumentBuilderFactory.newInstance().newDocumentBuilder().parse("file:///home/souvik/Desktop/apache-tomcat-9.0.39/bin/input.txt");
            final XPathExpression xpath = XPathFactory.newInstance().newXPath().compile("//*[count(./*) = 0]");
            final NodeList nodeList = (NodeList) xpath.evaluate(doc, XPathConstants.NODESET);
            for(int i = 0; i < nodeList.getLength(); i++) {
                final Element el = (Element) nodeList.item(i);
//            System.out.println(el.getNodeName());
                uniqueElements.put(el.getNodeName(), true);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        System.out.println(uniqueElements);
        //if(courseslist.size()!=0)
//        {
        return Response.ok().entity(data).build();
//        }
        //else{
        //  return Response.status(203).build();
        //}
    }
}
