package StartCucumber;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)
@CucumberOptions(plugin= {"pretty","html:target/report"},
					tags = {"@DaTable,@All,@Base"},features= {"Feature"},glue= {"StepDefination"})//thirde commit
public class RunnerTest {

}
