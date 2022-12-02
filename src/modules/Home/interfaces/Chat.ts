export interface GroupChat extends Chat {
    groupMetadata: GroupMetadata;
}

export type ChatOrGroupChat = Chat | GroupChat;

export interface Chat {
    id: Id;
    name: string;
    isGroup: boolean;
    isReadOnly: boolean;
    unreadCount: number;
    timestamp: number;
    archived: boolean;
    pinned: boolean;
    isMuted: boolean;
    muteExpiration: number;
}

interface GroupMetadata {
    id: Id;
    creation: number;
    owner: Id;
    subject: string;
    subjectTime: number;
    descTime: number;
    restrict: boolean;
    announce: boolean;
    noFrequentlyForwarded: boolean;
    ephemeralDuration: number;
    membershipApprovalMode: boolean;
    size: number;
    support: boolean;
    suspended: boolean;
    terminated: boolean;
    uniqueShortNameMap: UniqueShortNameMap;
    isParentGroup: boolean;
    isParentGroupClosed: boolean;
    defaultSubgroup: boolean;
    lastActivityTimestamp: number;
    lastSeenActivityTimestamp: number;
    incognito: boolean;
    participants: Participant[];
    pendingParticipants: any[];
    pastParticipants: PastParticipant[];
    membershipApprovalRequests: any[];
}

interface UniqueShortNameMap {

}

interface Participant {
    id: Id;
    isAdmin: boolean;
    isSuperAdmin: boolean;
}

interface PastParticipant {
    id: Id;
    leaveTs: number;
    leaveReason: string;
}

interface Id {
    server: string;
    user: string;
    _serialized: string;
}