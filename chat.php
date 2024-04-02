<?php include_once "header.php" ?>

<body>

    <div class="wrapper">
        <section class="chat-area">
            <header>
                <a href="users.php" class="back_icon"><i class="fas fa-arrow-left"></i></a>
                <img src="php/images/1709890019rabbit.jpg" alt="">
                <div class="details">
                    <span>First Last</span>
                    <p>Online</p>
                </div>
            </header>
            <div class="chat-box">

            </div>
            <form action="#" class="typing-area">
                <input type="text" class="incoming_id" name="incoming_id" value="" hidden>
                <input type="text" name="message" class="input_field" placeholder="Type a message here..." autocomplete="off">
                <button><i class="fab fa-telegram-plane"></i></button>
            </form>
        </section>
    </div>

</body>
</html>