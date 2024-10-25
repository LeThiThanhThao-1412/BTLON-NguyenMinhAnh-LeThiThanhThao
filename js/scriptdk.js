$(document).ready(function() {
    $('#registrationForm').submit(function(event) {
        event.preventDefault(); // Ngăn chặn việc gửi form

        const fullName = $('#txtHT').val();
        const phone = $('#txtSDT').val();
        const email = $('#txtEmail').val();
        const dob = $('#txtDOB').val();
        const username = $('#txtUsername').val();
        const password = $('#txtPassword').val();
        const confirmPassword = $('#txtConfirmPassword').val();
        const acceptTerms = $('#acceptTerms').is(':checked');

        // Kiểm tra rằng tất cả các trường không rỗng
        if (!fullName || !phone || !email || !dob || !username || !password || !confirmPassword) {
            alert('Vui lòng không để lại trường nào trống.');
            return;
        }

        // Kiểm tra Họ và Tên
        const namePattern = /^([A-Z][a-z]+(\s|$))+$/;
        if (!namePattern.test(fullName) || fullName.split(" ").length < 2) {
            alert('Họ và tên phải có ít nhất 2 từ, và ký tự đầu tiên của mỗi từ phải viết hoa.');
            return;
        }

        // Kiểm tra Số điện thoại
        const phonePattern = /^0\d{3}\.\d{3}\.\d{3}$/;
        if (!phonePattern.test(phone)) {
            alert('Số điện thoại phải theo mẫu: 0XXX.XXX.XXX.');
            return;
        }

        // Kiểm tra Ngày tháng năm sinh
        const today = new Date();
        const birthDate = new Date(dob);
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        if (age < 12) {
            alert('Bạn phải ít nhất 12 tuổi.');
            return;
        }

        // Kiểm tra Email
        const emailPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{3,}@[a-z]+\.[a-z]{2,}$/;
        if (!emailPattern.test(email)) {
            alert('Email phải theo mẫu: name_email@gmail.com, bao gồm ít nhất 3 ký tự, có chữ, số và 1 ký tự đặc biệt.');
            return;
        }

        // Kiểm tra Tên đăng nhập
        if (!namePattern.test(username) || username.split(" ").length < 2) {
            alert('Tên đăng nhập phải có ít nhất 2 từ, và ký tự đầu tiên của mỗi từ phải viết hoa.');
            return;
        }

        // Kiểm tra Mật khẩu
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
        if (!passwordPattern.test(password)) {
            alert('Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt.');
            return;
        }

        // Kiểm tra Nhập lại mật khẩu
        if (password !== confirmPassword) {
            alert('Mật khẩu và Nhập lại mật khẩu không khớp.');
            return;
        }

        // Kiểm tra checkbox đồng ý điều khoản
        if (!acceptTerms) {
            alert('Bạn cần đồng ý với các điều khoản và điều kiện.');
            return;
        }

        // Nếu tất cả kiểm tra đều thành công, có thể gửi form
        alert('Đăng ký thành công!');
        // Ở đây có thể gửi form hoặc xử lý dữ liệu như mong muốn
    });
});