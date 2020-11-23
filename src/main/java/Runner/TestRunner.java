package Runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;




@RunWith(Cucumber.class)
@CucumberOptions(
	               features = {"classpath:Features/deals.feature"},// the path of features file
                   glue = {"stepDefinations"},// the path of step definition file
                   plugin = {"pretty","html:test-output","json:json_output/cucumber.json","junit:junit_xml/cucumber.xml"}, //to generate different types of reporting
                   monochrome = true,// display console output in proper readable format
                   strict = true, //it will check if any step is not defined in step definition file
                   dryRun =true) //to check the mapping is proper between feature file and step def file
                  
               

/*
        features = "E:\\WorkSpaceAutomations\\FreeCrmBDDFramework\\src\\main\\java\\Features\\login.feature", 
        glue={"stepDefinations"},
        junit= {"pretty","html:test-outout"})
*/

public class TestRunner {
	
}







  
