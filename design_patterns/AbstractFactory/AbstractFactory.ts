// Interfejsy produktów
interface Button {
    render(): void;
}

interface TextField {
    render(): void;
}

// Konkretne produkty - rodzina Windows
class WindowsButton implements Button {
    render() {
        console.log("Rendering Windows button.");
    }
}

class WindowsTextField implements TextField {
    render() {
        console.log("Rendering Windows text field.");
    }
}

// Konkretne produkty - rodzina Mac
class MacButton implements Button {
    render() {
        console.log("Rendering Mac button.");
    }
}

class MacTextField implements TextField {
    render() {
        console.log("Rendering Mac text field.");
    }
}

// Interfejs Abstract Factory
interface GUIFactory {
    createButton(): Button;
    createTextField(): TextField;
}

// Konkretne fabryki
class WindowsFactory implements GUIFactory {
    createButton(): Button {
        return new WindowsButton();
    }
    createTextField(): TextField {
        return new WindowsTextField();
    }
}

class MacFactory implements GUIFactory {
    createButton(): Button {
        return new MacButton();
    }
    createTextField(): TextField {
        return new MacTextField();
    }
}

// Przykład użycia
function clientCode(factory: GUIFactory) {
    const button = factory.createButton();
    const textField = factory.createTextField();
    button.render();
    textField.render();
}

clientCode(new WindowsFactory()); // Rendering Windows button. Rendering Windows text field.
clientCode(new MacFactory());     // Rendering Mac button. Rendering Mac text field.
