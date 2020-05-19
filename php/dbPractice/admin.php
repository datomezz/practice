<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Panel</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="container">
        <div class="categories">
            <div class="category__list">
                <a href="http://<?php echo $_SERVER['HTTP_HOST'];?>/php/index.php" class="list__item">მთავარი</a>
                <a href="http://<?php echo $_SERVER['HTTP_HOST'];?>/php/admin.php" class="list__item">მონაცემთა დამატება</a>
                <a href="http://<?php echo $_SERVER['HTTP_HOST'];?>/php/posts.php" class="list__item">მონაცემთა სია</a>
            </div>
        </div>
        <div class="section">
            <h1 class="add__header">დაამატე საიხლე</h1>
            <form class="add__form" action="update.php" method="POST" enctype="multipart/form-data">
                <input class="add__img" type="file" name="image[]" multiple="multiple">
                <label for="image" class="add__label" name="image[]">სურათის ატვირთვა</label>
                <div class="add__self">
                    <input type="text" name="name" placeholder="სახელი">
                    <input type="text" name="surname" placeholder="გვარი">
                </div>
                <textarea rows="7" placeholder="აღწერა" name="description"></textarea>
                <div class="add__submit">
                    <button type="submit" name="submit">Click</button>
                </div>
            </form>
        </div>
    </div>
</body>
</html>