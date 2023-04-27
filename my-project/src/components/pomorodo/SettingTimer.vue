<template>
    <div class="container">
        <h1>Pomodoro Timer Settings</h1>
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