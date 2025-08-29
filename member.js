// Returns a member's skills as an array of strings
// Returns a member's skills as an array of strings
function skillsMember(member) {
    if (member && Array.isArray(member.skills)) {
        return member.skills;
    } else {
        return [];
    }
}