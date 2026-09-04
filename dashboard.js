// =========================
// Global Chart Variables
// =========================

let productionChart;
let defectsChart;
let downtimeChart;
let operatingHoursChart;


// =========================
// Load Machines
// =========================

async function loadMachines() {

    try {

        const response =
            await fetch("/api/machines");

        const machines =
            await response.json();

        const table =
            document.getElementById(
                "machine-table"
            );

        table.innerHTML = "";


        machines.forEach(machine => {

            let statusClass = "";


            if (machine.status === "Running") {

                statusClass =
                    "status-running";

            }

            else if (
                machine.status === "Warning"
            ) {

                statusClass =
                    "status-warning";

            }

            else if (
                machine.status === "Maintenance"
            ) {

                statusClass =
                    "status-maintenance";

            }


            table.innerHTML += `

                <tr>

                    <td>
                        ${machine.machine_name}
                    </td>

                    <td>
                        ${machine.machine_type}
                    </td>

                    <td>
                        ${machine.location}
                    </td>

                    <td class="${statusClass}">
                        ${machine.status}
                    </td>

                </tr>

            `;

        });

    }

    catch (error) {

        console.error(
            "Machine loading error:",
            error
        );

    }

}


// =========================
// Load Production
// =========================

async function loadProduction() {

    try {

        const response =
            await fetch("/api/production");

        const production =
            await response.json();

        const table =
            document.getElementById(
                "production-table"
            );

        table.innerHTML = "";


        let totalProduction = 0;

        let totalDefects = 0;


        production.forEach(item => {

            totalProduction +=
                item.quantity;

            totalDefects +=
                item.defects;


            table.innerHTML += `

                <tr>

                    <td>
                        M-${String(
                            item.machine_id
                        ).padStart(3, "0")}
                    </td>

                    <td>
                        ${item.product_name}
                    </td>

                    <td>
                        ${item.quantity}
                    </td>

                    <td>
                        ${item.defects}
                    </td>

                    <td>
                        ${item.production_date}
                    </td>

                </tr>

            `;

        });


        document.getElementById(
            "total-production"
        ).textContent =
            totalProduction;


        document.getElementById(
            "total-defects"
        ).textContent =
            totalDefects;

    }

    catch (error) {

        console.error(
            "Production loading error:",
            error
        );

    }

}


// =========================
// Load Maintenance
// =========================

async function loadMaintenance() {

    try {

        const response =
            await fetch("/api/maintenance");

        const maintenance =
            await response.json();

        const table =
            document.getElementById(
                "maintenance-table"
            );

        table.innerHTML = "";


        let totalDowntime = 0;


        maintenance.forEach(item => {

            totalDowntime +=
                item.downtime_hours;


            table.innerHTML += `

                <tr>

                    <td>
                        M-${String(
                            item.machine_id
                        ).padStart(3, "0")}
                    </td>

                    <td>
                        ${item.maintenance_type}
                    </td>

                    <td>
                        ${item.description}
                    </td>

                    <td>
                        ${item.downtime_hours}
                    </td>

                    <td>
                        ${item.maintenance_date}
                    </td>

                </tr>

            `;

        });


        document.getElementById(
            "total-downtime"
        ).textContent =
            totalDowntime.toFixed(1);

    }

    catch (error) {

        console.error(
            "Maintenance loading error:",
            error
        );

    }

}


// =========================
// Load Sensors
// =========================

async function loadSensors() {

    try {

        const response =
            await fetch("/api/sensors");

        const sensors =
            await response.json();

        const table =
            document.getElementById(
                "sensor-table"
            );

        table.innerHTML = "";


        sensors.forEach(sensor => {

            table.innerHTML += `

                <tr>

                    <td>
                        M-${String(
                            sensor.machine_id
                        ).padStart(3, "0")}
                    </td>

                    <td>
                        ${sensor.temperature}
                    </td>

                    <td>
                        ${sensor.vibration}
                    </td>

                    <td>
                        ${sensor.pressure}
                    </td>

                    <td>
                        ${sensor.operating_hours}
                    </td>

                    <td>
                        ${sensor.recorded_at}
                    </td>

                </tr>

            `;

        });

    }

    catch (error) {

        console.error(
            "Sensor loading error:",
            error
        );

    }

}


// =========================
// Load Alerts
// =========================

async function loadAlerts() {

    try {

        const response =
            await fetch("/api/alerts");

        const alerts =
            await response.json();

        const container =
            document.getElementById(
                "alerts-container"
            );

        container.innerHTML = "";


        document.getElementById(
            "active-alerts"
        ).textContent =
            alerts.length;


        if (alerts.length === 0) {

            container.innerHTML = `

                <div class="alert">

                    <div class="alert-icon">
                        ✅
                    </div>

                    <div>

                        <strong>
                            No active alerts
                        </strong>

                        <p>
                            All monitored machines
                            are operating within
                            normal limits.
                        </p>

                    </div>

                </div>

            `;

            return;
        }


        alerts.forEach(alert => {

            container.innerHTML += `

                <div class="alert">

                    <div class="alert-icon">
                        ⚠️
                    </div>

                    <div>

                        <strong>
                            ${alert.machine}
                        </strong>

                        <p>
                            ${alert.message}
                        </p>

                    </div>

                </div>

            `;

        });

    }

    catch (error) {

        console.error(
            "Alert loading error:",
            error
        );

    }

}


// =========================
// Load Products
// =========================

async function loadProducts() {

    try {

        const response =
            await fetch("/api/products");

        const products =
            await response.json();

        const select =
            document.getElementById(
                "product-select"
            );


        select.innerHTML = `

            <option value="">
                Select a product
            </option>

        `;


        products.forEach(product => {

            select.innerHTML += `

                <option value="${product.id}">
                    ${product.product_number}
                    -
                    ${product.product_name}
                </option>

            `;

        });


        select.addEventListener(
            "change",
            function () {

                const productId =
                    this.value;


                if (!productId) {

                    document.getElementById(
                        "product-info"
                    ).innerHTML = "";

                    document.getElementById(
                        "bom-table"
                    ).innerHTML = "";

                    return;
                }


                const selectedProduct =
                    products.find(
                        product =>
                            product.id ==
                            productId
                    );


                displayProduct(
                    selectedProduct
                );


                loadBOM(productId);

            }
        );

    }

    catch (error) {

        console.error(
            "Product loading error:",
            error
        );

    }

}


// =========================
// Display Product
// =========================

function displayProduct(product) {

    const container =
        document.getElementById(
            "product-info"
        );


    container.innerHTML = `

        <div class="product-card">

            <h3>
                ${product.product_name}
            </h3>

            <p>
                <strong>
                    Product Number:
                </strong>

                ${product.product_number}
            </p>

            <p>
                <strong>
                    Type:
                </strong>

                ${product.product_type}
            </p>

            <p>
                <strong>
                    Version:
                </strong>

                ${product.version}
            </p>

            <p>
                <strong>
                    Description:
                </strong>

                ${product.description}
            </p>

        </div>

    `;

}


// =========================
// Load BOM
// =========================

async function loadBOM(productId) {

    try {

        const response =
            await fetch(
                `/api/bom/${productId}`
            );

        const bom =
            await response.json();

        const table =
            document.getElementById(
                "bom-table"
            );

        table.innerHTML = "";


        bom.forEach(item => {

            table.innerHTML += `

                <tr>

                    <td>
                        ${item.component_name}
                    </td>

                    <td>
                        ${item.material}
                    </td>

                    <td>
                        ${item.specification}
                    </td>

                    <td>
                        ${item.quantity}
                    </td>

                    <td>
                        ${item.bom_type}
                    </td>

                    <td>
                        ${item.manufacturing_stage || "-"}
                    </td>

                </tr>

            `;

        });

    }

    catch (error) {

        console.error(
            "BOM loading error:",
            error
        );

    }

}


// =========================
// Manufacturing Analytics
// =========================

async function loadAnalytics() {

    try {

        const productionResponse =
            await fetch(
                "/api/production"
            );

        const productionData =
            await productionResponse.json();


        const maintenanceResponse =
            await fetch(
                "/api/maintenance"
            );

        const maintenanceData =
            await maintenanceResponse.json();


        const sensorResponse =
            await fetch(
                "/api/sensors"
            );

        const sensorData =
            await sensorResponse.json();


        const machineNames = [

            "M-001",
            "M-002",
            "M-003",
            "M-004",
            "M-005"

        ];


        const productionTotals = {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0
        };


        const defectTotals = {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0
        };


        productionData.forEach(item => {

            productionTotals[
                item.machine_id
            ] += item.quantity;


            defectTotals[
                item.machine_id
            ] += item.defects;

        });


        const productionValues = [

            productionTotals[1],
            productionTotals[2],
            productionTotals[3],
            productionTotals[4],
            productionTotals[5]

        ];


        const defectValues = [

            defectTotals[1],
            defectTotals[2],
            defectTotals[3],
            defectTotals[4],
            defectTotals[5]

        ];


        const downtimeTotals = {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0
        };


        maintenanceData.forEach(item => {

            downtimeTotals[
                item.machine_id
            ] += item.downtime_hours;

        });


        const downtimeValues = [

            downtimeTotals[1],
            downtimeTotals[2],
            downtimeTotals[3],
            downtimeTotals[4],
            downtimeTotals[5]

        ];


        const operatingHours = {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0
        };


        sensorData.forEach(item => {

            operatingHours[
                item.machine_id
            ] = item.operating_hours;

        });


        const operatingHoursValues = [

            operatingHours[1],
            operatingHours[2],
            operatingHours[3],
            operatingHours[4],
            operatingHours[5]

        ];


        createProductionChart(
            machineNames,
            productionValues
        );


        createDefectsChart(
            machineNames,
            defectValues
        );


        createDowntimeChart(
            machineNames,
            downtimeValues
        );


        createOperatingHoursChart(
            machineNames,
            operatingHoursValues
        );

    }

    catch (error) {

        console.error(
            "Analytics loading error:",
            error
        );

    }

}


// =========================
// Production Chart
// =========================

function createProductionChart(
    labels,
    data
) {

    const canvas =
        document.getElementById(
            "production-chart"
        );


    if (productionChart) {

        productionChart.destroy();

    }


    productionChart =
        new Chart(
            canvas,
            {

                type: "bar",

                data: {

                    labels: labels,

                    datasets: [{

                        label:
                            "Production Quantity",

                        data: data

                    }]

                },

                options: {

                    responsive: true,

                    plugins: {

                        legend: {
                            display: false
                        }

                    }

                }

            }
        );

}


// =========================
// Defects Chart
// =========================

function createDefectsChart(
    labels,
    data
) {

    const canvas =
        document.getElementById(
            "defects-chart"
        );


    if (defectsChart) {

        defectsChart.destroy();

    }


    defectsChart =
        new Chart(
            canvas,
            {

                type: "bar",

                data: {

                    labels: labels,

                    datasets: [{

                        label:
                            "Defects",

                        data: data

                    }]

                },

                options: {

                    responsive: true,

                    plugins: {

                        legend: {
                            display: false
                        }

                    }

                }

            }
        );

}


// =========================
// Downtime Chart
// =========================

function createDowntimeChart(
    labels,
    data
) {

    const canvas =
        document.getElementById(
            "downtime-chart"
        );


    if (downtimeChart) {

        downtimeChart.destroy();

    }


    downtimeChart =
        new Chart(
            canvas,
            {

                type: "bar",

                data: {

                    labels: labels,

                    datasets: [{

                        label:
                            "Downtime Hours",

                        data: data

                    }]

                },

                options: {

                    responsive: true,

                    plugins: {

                        legend: {
                            display: false
                        }

                    }

                }

            }
        );

}


// =========================
// Operating Hours Chart
// =========================

function createOperatingHoursChart(
    labels,
    data
) {

    const canvas =
        document.getElementById(
            "operating-hours-chart"
        );


    if (operatingHoursChart) {

        operatingHoursChart.destroy();

    }


    operatingHoursChart =
        new Chart(
            canvas,
            {

                type: "bar",

                data: {

                    labels: labels,

                    datasets: [{

                        label:
                            "Operating Hours",

                        data: data

                    }]

                },

                options: {

                    responsive: true,

                    plugins: {

                        legend: {
                            display: false
                        }

                    }

                }

            }
        );

}


// =========================
// AI Assistant
// =========================

async function askAI() {

    const input =
        document.getElementById(
            "ai-question"
        );


    const question =
        input.value.trim();


    if (!question) {

        return;

    }


    if (question.length > 500) {

        alert(
            "Please keep your question "
            + "under 500 characters."
        );

        return;

    }


    const chatContainer =
        document.getElementById(
            "chat-container"
        );


    // User message

    const userMessage =
        document.createElement(
            "div"
        );


    userMessage.className =
        "chat-message user-message";


    const userTitle =
        document.createElement(
            "strong"
        );


    userTitle.textContent =
        "You";


    const userText =
        document.createElement(
            "p"
        );


    userText.textContent =
        question;


    userMessage.appendChild(
        userTitle
    );


    userMessage.appendChild(
        userText
    );


    chatContainer.appendChild(
        userMessage
    );


    input.value = "";


    // Loading message

    const loadingMessage =
        document.createElement(
            "div"
        );


    loadingMessage.className =
        "chat-message assistant-message";


    const loadingTitle =
        document.createElement(
            "strong"
        );


    loadingTitle.textContent =
        "SmartFactory Assistant";


    const loadingText =
        document.createElement(
            "p"
        );


    loadingText.textContent =
        "Thinking...";


    loadingMessage.appendChild(
        loadingTitle
    );


    loadingMessage.appendChild(
        loadingText
    );


    chatContainer.appendChild(
        loadingMessage
    );


    chatContainer.scrollTop =
        chatContainer.scrollHeight;


    try {

        const response =
            await fetch(
                "/api/ai",
                {

                    method: "POST",

                    headers: {

                        "Content-Type":
                            "application/json"

                    },

                    body: JSON.stringify({

                        question:
                            question

                    })

                }
            );


        const result =
            await response.json();


        if (!response.ok) {

            throw new Error(
                result.error ||
                "Request failed"
            );

        }


        loadingMessage.innerHTML = "";


        const assistantTitle =
            document.createElement(
                "strong"
            );


        assistantTitle.textContent =
            "SmartFactory Assistant";


        const assistantText =
            document.createElement(
                "p"
            );


        assistantText.textContent =
            result.answer;


        const source =
            document.createElement(
                "small"
            );


        source.textContent =
            "Source: " +
            (
                result.source ||
                "SmartFactory"
            );


        loadingMessage.appendChild(
            assistantTitle
        );


        loadingMessage.appendChild(
            assistantText
        );


        loadingMessage.appendChild(
            source
        );

    }

    catch (error) {

        loadingMessage.innerHTML = "";


        const errorTitle =
            document.createElement(
                "strong"
            );


        errorTitle.textContent =
            "SmartFactory Assistant";


        const errorText =
            document.createElement(
                "p"
            );


        errorText.textContent =
            "Sorry, I could not process "
            + "your question.";


        loadingMessage.appendChild(
            errorTitle
        );


        loadingMessage.appendChild(
            errorText
        );


        console.error(
            "AI error:",
            error
        );

    }


    chatContainer.scrollTop =
        chatContainer.scrollHeight;

}


// =========================
// Automatic IoT Monitoring
// =========================

async function simulateIoT() {

    try {

        const response =
            await fetch(
                "/api/simulate-iot",
                {
                    method: "POST"
                }
            );


        if (!response.ok) {

            throw new Error(
                "IoT simulation failed"
            );

        }


        await loadSensors();

        await loadAlerts();

        await loadAnalytics();

    }

    catch (error) {

        console.error(
            "IoT simulation error:",
            error
        );

    }

}


// New sensor data every 15 seconds

setInterval(
    simulateIoT,
    15000
);


// =========================
// Dashboard Initialization
// =========================

async function loadDashboard() {

    await loadMachines();

    await loadProduction();

    await loadMaintenance();

    await loadSensors();

    await loadAlerts();

    await loadProducts();

    await loadAnalytics();

}


// Start dashboard

loadDashboard();