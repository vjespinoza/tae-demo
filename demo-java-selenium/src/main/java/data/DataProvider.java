package data;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import enums.DataKey;
import enums.TextKey;

import java.io.File;
import java.io.IOException;

public class DataProvider {
    private static JsonNode testDataRoot;
    private static final String DATA_FILE_PATH = "target/classes/external-json/testData.json";
    private static final String TEXTS_FILE_PATH = "target/classes/external-json/texts.json";

    private static void loadData(String filePath) {
        ObjectMapper mapper = new ObjectMapper();
        try {
            File file = new File(filePath);
            if (file.exists()) {
                testDataRoot = mapper.readTree(file);
            } else {
                //TODO: Optimize logging
                System.err.println("File not found at: " + filePath);
            }
        } catch (IOException e) {
            //TODO: Optimize logging
            System.err.println("Error loading test data: " + e.getMessage());
            e.printStackTrace();
        }
    }

    private static JsonNode getValue(String filePath, String key) {
        loadData(filePath);
        if (testDataRoot == null || key == null || key.isEmpty()) {
            return null;
        }
        String[] parts = key.split("\\.");
        JsonNode currentNode = testDataRoot;

        for (String part : parts) {
            if (currentNode == null) {
                return null;
            }
            if (currentNode.isObject()) {
                currentNode = currentNode.get(part);
            } else if (currentNode.isArray()) {
                try {
                    int index = Integer.parseInt(part);
                    if (index >= 0 && index < currentNode.size()) {
                        currentNode = currentNode.get(index);
                    } else {
                        return null;
                    }
                } catch (NumberFormatException e) {
                    return null;
                }
            } else {
                return null;
            }
        }
        return currentNode;
    }

    public static String getData(DataKey key) {
        JsonNode node = getValue(DATA_FILE_PATH, key.getKey());
        return node != null ? node.asText() : null;
    }

    public static String getText(TextKey key) {
        JsonNode node = getValue(TEXTS_FILE_PATH, key.getKey());
        return node != null ? node.asText() : null;
    }
}