<template>
    <div class="container">
        <table>
            <tr>
            <th >Work Time</th>
                <td>
            <input type="number" id="work-time" name="work-time" min="1" max="120" required>
                </td>
            </tr>

            <tr>
                <th >break Time</th>
                <td>
                    <input type="number" id="work-time" name="work-time" min="1" max="30" required>
                </td>
            </tr>

            <tr>
            <th >long break Time</th>
            <td>
                <input type="number" id="work-time" name="work-time" min="1" max="60" required>
            </td>
        </tr>
        </table>
    </div>
</template>

<script>

</script>

<style>
.container {
    width: 100%;
    height: 65vh;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
}

table{

}

tr{
    margin: 1rem;
    width: 500px;
    display: flex;
    justify-content:space-between;
}

th {
    font-size: 1rem;
    margin: 10px 0;
    color: white;
    font-weight: lighter;
}

input[type="number"] {
    width: 100px;
    padding: 10px;
    font-size: 1.2rem;
    background-color: rgba(255, 255, 255, 0);
    border: 2px solid #ffffff;
    color: white;
}

</style>