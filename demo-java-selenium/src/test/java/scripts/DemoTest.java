package scripts;

import data.DataProvider;
import org.junit.jupiter.api.Test;

import static enums.DataKey.CUSTOMER_ONE_FULL_NAME;
import static enums.TextKey.TEST_KEY;

public class DemoTest {

    @Test
    public void demoTest() {
        System.out.println(DataProvider.getData(CUSTOMER_ONE_FULL_NAME));
        System.out.println(DataProvider.getText(TEST_KEY));
    }
}
