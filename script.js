if (window.location.pathname.endsWith("result.html")) {
    document.addEventListener('DOMContentLoaded', function() {
        function getQueryParam(param) {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(param);
        }

        var surname = getQueryParam('surname') || '';
        var firstname = getQueryParam('firstname') || '';
        var middlename = getQueryParam('middlename') || '';
        var rate = parseFloat(getQueryParam('rate'));
        var days = parseFloat(getQueryParam('daysWorked'));

        // Combine name
        var name = surname + ', ' + firstname + ' ' + middlename;

        if (surname && firstname && middlename && !isNaN(rate) && !isNaN(days)) {
            var grossPay = rate * days;
            var sss = grossPay * 0.05;
            var pagibig = grossPay * 0.03;
            var philhealth = grossPay * 0.02;
            var tax = grossPay * 0.05;
            var totalDeduction = sss + pagibig + philhealth + tax;
            var netPay = grossPay - totalDeduction;

            document.getElementById('resultContent').innerHTML =
                "<p><b>Employee Name:</b> " + name + "</p>" +
                "<p><b>Gross Pay:</b> ₱" + grossPay.toFixed(2) + "</p>" +
                "<p><b>SSS (5%):</b> ₱" + sss.toFixed(2) + "</p>" +
                "<p><b>Pag-ibig (3%):</b> ₱" + pagibig.toFixed(2) + "</p>" +
                "<p><b>Philhealth (2%):</b> ₱" + philhealth.toFixed(2) + "</p>" +
                "<p><b>Tax (5%):</b> ₱" + tax.toFixed(2) + "</p>" +
                "<p><b>Total Deduction:</b> ₱" + totalDeduction.toFixed(2) + "</p>" +
                "<p><b>Net Pay:</b> ₱" + netPay.toFixed(2) + "</p>";
        } else {
            document.getElementById('resultContent').innerHTML = "<p>Invalid or missing data.</p>";
        }
    });
}