package StartCucumber;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)
@CucumberOptions(plugin= {"pretty","html:target/report"},
					tags = {"@DaTable,@All"},features= {"Feature"},glue= {"StepDefination"})
public class RunnerTest {

}
