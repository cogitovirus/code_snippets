import { Singleton } from './design_patterns/singleton/Singleton.js';

async function main(): Promise<void> {
    const instance1 = Singleton.getInstance();
    const instance2 = Singleton.getInstance();

    console.log(instance1 === instance2); // true

    instance1.sayHello(); // "Hello from Singleton!"
}

main().then(() => {
    console.log("Main function executed successfully.");
}).catch((error) => {
    console.error("Error occurred:", error);
});
